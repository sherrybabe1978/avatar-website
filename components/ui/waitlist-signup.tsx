'use client';

import { useState } from 'react';

interface WaitlistSignupProps {
  source: 'framework' | 'landing' | 'science';
  buttonLabel?: string;
}

export function WaitlistSignup({ source, buttonLabel = 'Join the Waitlist' }: WaitlistSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setMessage('You are on the waitlist.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 w-full max-w-xl space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/60 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center border border-white/30 px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting...' : buttonLabel}
      </button>
      {message ? <p className="text-sm text-foreground/80">{message}</p> : null}
    </form>
  );
}
