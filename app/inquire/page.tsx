'use client';

import Link from 'next/link';
import Script from 'next/script';
import { FormEvent, useState } from 'react';

export default function InquirePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [brandStage, setBrandStage] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const turnstileToken = formData.get('cf-turnstile-response');

      if (!turnstileToken || typeof turnstileToken !== 'string') {
        setMessage('Please complete the security check.');
        return;
      }

      const response = await fetch('/api/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          budget,
          brandStage,
          details,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit intake form.');
      }

      setMessage('Thanks, your intake has been sent.');
      setName('');
      setEmail('');
      setBudget('');
      setBrandStage('');
      setDetails('');
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-10 text-foreground md:px-12">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-foreground/70 underline-offset-4 hover:text-foreground hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">PARTNERSHIP INTAKE</h1>
        <p className="mt-3 max-w-2xl text-foreground/75">Quick vetting form to see if we are the right fit.</p>

        <div className="mt-8 grid border border-white/15 bg-black/35 backdrop-blur md:grid-cols-3">
          <aside className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">System Logic</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Client Qualification</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Share your budget, brand stage, and goals. This helps us determine fit before strategy onboarding.
            </p>
            <div className="mt-8 space-y-2 text-xs text-foreground/55">
              <p>01 — Submit intake</p>
              <p>02 — Fit review</p>
              <p>03 — Strategy call</p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="grid gap-4 p-5 md:col-span-2 md:grid-cols-2 md:p-6">
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-foreground/85">Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-white/20 bg-[#0b1117] px-3 py-2 text-foreground outline-none placeholder:text-foreground/40 focus:border-white/45"
                placeholder="Your name"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              <span className="text-foreground/85">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-white/20 bg-[#0b1117] px-3 py-2 text-foreground outline-none placeholder:text-foreground/40 focus:border-white/45"
                placeholder="you@brand.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              <span className="text-foreground/85">How much are you willing to spend per month?</span>
              <select
                required
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border border-white/20 bg-[#0b1117] px-3 py-2 text-foreground outline-none focus:border-white/45"
              >
                <option value="" className="bg-[#0b1117] text-[#f5f7fa]">Select budget</option>
                <option value="$1k-$3k" className="bg-[#0b1117] text-[#f5f7fa]">$1k-$3k</option>
                <option value="$3k-$7k" className="bg-[#0b1117] text-[#f5f7fa]">$3k-$7k</option>
                <option value="$7k-$15k" className="bg-[#0b1117] text-[#f5f7fa]">$7k-$15k</option>
                <option value="$15k+" className="bg-[#0b1117] text-[#f5f7fa]">$15k+</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm">
              <span className="text-foreground/85">Do you have a brand or are you starting fresh?</span>
              <select
                required
                value={brandStage}
                onChange={(e) => setBrandStage(e.target.value)}
                className="border border-white/20 bg-[#0b1117] px-3 py-2 text-foreground outline-none focus:border-white/45"
              >
                <option value="" className="bg-[#0b1117] text-[#f5f7fa]">Select one</option>
                <option value="Existing brand" className="bg-[#0b1117] text-[#f5f7fa]">Existing brand</option>
                <option value="Starting fresh" className="bg-[#0b1117] text-[#f5f7fa]">Starting fresh</option>
              </select>
            </label>

            <label className="md:col-span-2 flex flex-col gap-2 text-sm">
              <span className="text-foreground/85">Anything else we should know?</span>
              <textarea
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="border border-white/20 bg-[#0b1117] px-3 py-2 text-foreground outline-none placeholder:text-foreground/40 focus:border-white/45"
                placeholder="Current audience, goals, timeline..."
              />
            </label>
            {turnstileSiteKey ? (
              <div className="md:col-span-2">
                <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
              </div>
            ) : (
              <p className="md:col-span-2 text-sm text-foreground/75">
                Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 inline-flex w-fit items-center border border-white/30 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Intake'}
            </button>
            {message ? <p className="md:col-span-2 text-sm text-foreground/75">{message}</p> : null}
          </form>
        </div>
      </div>
    </main>
  );
}
