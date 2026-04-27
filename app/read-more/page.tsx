import Link from 'next/link';

export default function ReadMorePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground md:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <Link
          href="/"
          className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
        >
          ← Back
        </Link>

        <section className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
            Read More
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            AI Brand Persona System
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            We design high-fidelity synthetic personas that attract, engage, and convert.
            This includes strategic positioning, voice architecture, content automation,
            and conversion-ready interaction flows.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-foreground/10 p-5">
            <h2 className="text-sm font-semibold tracking-wide">Content Engine</h2>
            <p className="mt-2 text-sm text-foreground/75">
              Persona-led content systems tuned for speed, consistency, and outcomes.
            </p>
          </article>
          <article className="rounded-2xl border border-foreground/10 p-5">
            <h2 className="text-sm font-semibold tracking-wide">Signal Architecture</h2>
            <p className="mt-2 text-sm text-foreground/75">
              Narrative frameworks that align your brand voice with your best customers.
            </p>
          </article>
          <article className="rounded-2xl border border-foreground/10 p-5">
            <h2 className="text-sm font-semibold tracking-wide">Conversion Logic</h2>
            <p className="mt-2 text-sm text-foreground/75">
              Page flows and messaging sequences that guide intent to action.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
