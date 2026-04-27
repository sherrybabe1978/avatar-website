import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, budget, brandStage, details, turnstileToken } = await request.json();

    if (!name || !email || !budget || !brandStage || !turnstileToken) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return NextResponse.json({ error: 'Server captcha key is missing.' }, { status: 500 });
    }

    const verifyBody = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
    });

    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim();
    if (ip) {
      verifyBody.append('remoteip', ip);
    }

    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: verifyBody.toString(),
    });
    const turnstileData = await turnstileResponse.json();
    if (!turnstileData.success) {
      return NextResponse.json({ error: 'Captcha verification failed.' }, { status: 400 });
    }

    const to = process.env.INTAKE_TO_EMAIL || 'hello@myllm.news';
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Scent Logic Intake — ${name}`,
      text: `Name: ${name}
Email: ${email}
Monthly Budget: ${budget}
Brand Stage: ${brandStage}
Details: ${details || 'N/A'}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send intake.' }, { status: 500 });
  }
}
