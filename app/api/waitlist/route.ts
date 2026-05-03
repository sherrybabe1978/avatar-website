import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, source } = (await request.json()) as { email?: string; source?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Valid email is required.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: 'Resend is not configured.' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'hello@askgizelle.com',
      to: 'hello@askgizelle.com',
      replyTo: email,
      subject: `New waitlist signup: ${email}`,
      text: `New waitlist signup\n\nEmail: ${email}\nSource: ${source || 'unknown'}\nTime: ${new Date().toISOString()}`,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Unable to submit waitlist signup.' }, { status: 500 });
  }
}
