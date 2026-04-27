import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, budget, brandStage, details } = await request.json();

    if (!name || !email || !budget || !brandStage) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
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
