import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface InquirePayload {
  name?: string;
  email?: string;
  budget?: string;
  brandStage?: string;
  details?: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, budget, brandStage, details } = (await request.json()) as InquirePayload;

    if (!name || !email || !budget || !brandStage) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Valid email is required.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ error: 'Resend is not configured.' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'hello@askgizelle.com',
      to: 'hello@myllm.news',
      replyTo: email,
      subject: `Partnership Intake — ${name}`,
      text: `New intake submission\n\nName: ${name}\nEmail: ${email}\nMonthly Budget: ${budget}\nBrand Stage: ${brandStage}\nDetails: ${details || 'N/A'}\nTime: ${new Date().toISOString()}`,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Unable to submit intake.' }, { status: 500 });
  }
}
