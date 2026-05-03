'use client';

import { WaitlistSignup } from '@/components/ui/waitlist-signup';
import { ScrollTopButton } from '@/components/ui/scroll-top-button';

export default function FrameworkPage() {
  return (
    <main className="bg-background px-6 py-16 text-foreground md:px-12">
      <section className="mx-auto max-w-5xl">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => window.location.assign('/')}
            className="inline-flex items-center border border-white/30 px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            ← Back to Home
          </button>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">THE FRAMEWORK</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">SYSTEM ARCHITECTURE</h1>

        <p className="mt-8 text-lg leading-relaxed text-foreground/80">
          A complete, sequential framework of protocols that governs perception, presence, and influence from the first impression to lasting authority.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Each protocol builds directly on the one before it. When applied in order, they form a repeatable system that can be engineered with precision instead of left to chance.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          This is not advice.
          <br />
          It is architecture.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">How the System Works</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          The Framework is structured in deliberate layers. Each layer strengthens the ones that follow and is incomplete without the foundation beneath it.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-xl font-medium">Layer 01 – Foundation</p>
            <p className="mt-2 text-lg leading-relaxed text-foreground/80">Sensory imprinting that creates the first and most lasting biological response.</p>
          </div>
          <div>
            <p className="text-xl font-medium">Layer 02 – Perception Ordering</p>
            <p className="mt-2 text-lg leading-relaxed text-foreground/80">How others instantly organize and remember what they see and sense.</p>
          </div>
          <div>
            <p className="text-xl font-medium">Layer 03 – Influence Channels</p>
            <p className="mt-2 text-lg leading-relaxed text-foreground/80">The precise mechanics that shape emotional responses and direct outcomes.</p>
          </div>
          <div>
            <p className="text-xl font-medium">Layer 04 – Compounding Authority</p>
            <p className="mt-2 text-lg leading-relaxed text-foreground/80">Consistent signaling across environments that turns initial presence into long-term recognition.</p>
          </div>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-foreground/80">
          This sequence is intentional. Higher layers only reach their full strength when the layers beneath them are in place.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Begin with the Foundation</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Protocol 01 is available now at no cost and forms the base layer of the entire System Architecture.
        </p>
        <button
          type="button"
          onClick={() => window.location.assign('/images/protocol-download.png')}
          className="mt-8 inline-flex items-center border border-white/30 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Download Protocol 01 — Free
        </button>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Access the Complete Framework</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          The full sequence of protocols is released exclusively through the Inner Circle.
          <br />
          A limited number of positions will open on a rolling basis.
        </p>

        <WaitlistSignup source="framework" buttonLabel="Join the Waitlist" />
      </section>
      <ScrollTopButton />
    </main>
  );
}
