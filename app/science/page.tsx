'use client';

import { WaitlistSignup } from '@/components/ui/waitlist-signup';
import { ScrollTopButton } from '@/components/ui/scroll-top-button';

export default function SciencePage() {
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

        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">THE SCIENCE</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">MECHANISMS OF PERCEPTION</h1>

        <p className="mt-8 text-lg leading-relaxed text-foreground/80">
          The Framework is not constructed from opinion or intuition. It is built from established principles of how humans process sensory input, form impressions, and respond to signals.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Each protocol targets a specific mechanism that already operates in human perception and memory. When these mechanisms are deliberately arranged in sequence, the result becomes more consistent, more repeatable, and measurably stronger.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Sensory Imprinting</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          The first layer begins at the biological level. Olfactory signals bypass conscious processing and connect directly to memory and emotional centers. A carefully constructed signature creates an immediate and enduring imprint before visual or verbal information is even registered.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          This is why Protocol 01 focuses on scent as the foundation. It establishes the base layer on which all subsequent signals are interpreted.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Perceptual Ordering</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Once the sensory foundation is set, visual and spatial signals determine how information is ranked. People instinctively organize what they see into hierarchies of importance and status. The system uses precise visual composition and spatial presence to direct that ordering, ensuring recognition occurs rapidly and accurately.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Tonal and Narrative Influence</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Auditory and written signals then shape emotional response and behavioral direction. Subtle variations in pace, pitch, and phrasing can guide how others interpret intent and assign authority. When these signals are consistent with the earlier layers, they compound rather than compete.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Compounding Through Sequence</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          The order of application is not arbitrary. Research in sensory integration and sequential processing shows that foundational signals increase the impact of later signals. A presence built layer by layer creates reinforcement instead of interference.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Without the base layers, higher-order influence remains unstable. With them in place, each additional protocol multiplies the strength of the one before it.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Why This Approach Works</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Most approaches to presence treat individual skills as independent. The System Architecture treats them as interdependent layers that must be installed in order. The result is not improved performance in isolation, but a stable, engineered outcome that holds across different environments and over time.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          This is the difference between random effect and designed architecture.
        </p>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Begin with Protocol 01</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          Protocol 01 applies the first and most foundational mechanism. It is available now at no cost.
        </p>
        <a
          href="/images/protocol-download.png"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-medium text-foreground underline decoration-from-font"
        >
          → DOWNLOAD PROTOCOL 01 — FREE
        </a>

        <h2 className="mt-12 text-3xl font-semibold tracking-tight md:text-4xl">Access the Full System</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          The complete sequence of protocols, including their mechanisms and application methods, is released exclusively through the Inner Circle.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          A limited number of positions open on a rolling basis.
        </p>
        <WaitlistSignup source="science" buttonLabel="Join the Waitlist" />

        <p className="mt-12 text-lg leading-relaxed text-foreground/80">
          This is not advice.
          <br />
          It is architecture.
        </p>
      </section>
      <ScrollTopButton />
    </main>
  );
}
