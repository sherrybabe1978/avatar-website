'use client';

import { useEffect, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { MinimalistHero } from '@/components/sections/hero';
import { CtaCard } from '@/components/ui/cta-card';
import { ScrollTopButton } from '@/components/ui/scroll-top-button';
import { WaitlistSignup } from '@/components/ui/waitlist-signup';

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm8.9 1.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9A3.1 3.1 0 1 0 12 15a3.1 3.1 0 0 0 0-6.2Z" />
  </svg>
);

export default function HomePage() {
  const [isStrategyInView, setIsStrategyInView] = useState(false);

  useEffect(() => {
    const architectureSection = document.getElementById('system-architecture');
    if (!architectureSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStrategyInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(architectureSection);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background text-foreground">
      <section id="top">
        <MinimalistHero
          logoText="@askgizelle"
          navLinks={[
            { label: 'PROTOCOLS', href: '#protocols' },
            { label: 'THE SCIENCE', href: '/science' },
            { label: 'THE FRAMEWORK', href: '/framework' },
            { label: 'INNER CIRCLE', href: '#inner-circle' },
            { label: 'CONNECT', href: '#contact' },
          ]}
          mainText="Gizelle has decoded the underlying protocols that govern perception, presence, and influence. What appears as natural authority or effortless charisma is in fact precise architecture."
          readMoreLink="#protocol"
          readMoreText="→ ACCESS SYSTEM PROTOCOL"
          imageSrc="/images/avatar-hero.png"
          imageAlt="Talking head avatar portrait"
          overlayText={{ part1: 'ARCHITECTURE', part2: '' }}
          socialLinks={[
            { icon: Instagram, href: 'https://instagram.com/askgizelle' },
            { icon: Mail, href: 'mailto:hello@myllm.news' },
            { icon: MessageCircle, href: '#contact' },
          ]}
          locationText="@askgizelle"
          className="font-['Inter',_'Montserrat',_sans-serif]"
        />
      </section>

      <section id="protocol" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <CtaCard
            imageSrc="/images/protocol-download.png"
            imageAlt="Protocol 01 visual"
            title="PROTOCOL 01"
            subtitle="THE PROTOCOL"
            description="Download the free protocol and start mapping the scent-to-signal pathway that builds digital authority."
            buttonText="→ ACCESS PROTOCOL 01"
            onButtonClick={() => {
              window.open('/images/protocol-download.png', '_blank', 'noopener,noreferrer');
            }}
          />
        </div>
      </section>

      <section id="science" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">THE SCIENCE</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">THE SCIENCE</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            The protocols are grounded in how perception, memory, and decision-making actually work.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Each layer targets a specific psychological mechanism — from olfactory imprinting to visual hierarchy and tonal influence — so the framework produces consistent results rather than random outcomes.
          </p>
          <a href="/science" className="mt-6 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            → READ THE RESEARCH
          </a>
        </div>
      </section>

      <section id="protocols" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">PROTOCOLS</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">PROTOCOLS</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Gizelle’s system is built from precise, sequential protocols.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Each protocol is a standalone architectural layer. When applied in order, they form a complete framework for engineered perception and influence.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Protocol 01 is available now at no cost. All subsequent protocols are released exclusively inside the full System Architecture and the Inner Circle.
          </p>
          <a
            href="/images/protocol-download.png"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            → ACCESS PROTOCOL 01
          </a>
        </div>
      </section>

      <section id="system-architecture" className="border-y border-white/10 bg-[#070b10] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">THE FRAMEWORK</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">SYSTEM ARCHITECTURE</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            A complete, sequential framework of protocols that governs perception, presence, and influence from the first impression to lasting authority.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Each protocol builds directly on the one before it. When applied in order, they form a repeatable system that can be engineered with precision instead of left to chance.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            This is not advice.
            <br />
            It is architecture.
          </p>
          <a
            href="/framework"
            className="mt-8 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            → VIEW THE FULL FRAMEWORK
          </a>
        </div>
      </section>

      <section id="inner-circle" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">INNER CIRCLE</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">JOIN THE WAITLIST</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Get notified when new positions open for full framework access and live guidance.
          </p>
          <WaitlistSignup source="landing" buttonLabel="Join the Waitlist" />
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 pt-8 md:px-12">
        <div className="mx-auto max-w-5xl border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/75">
            <div>
              CONNECT:{' '}
              <a className="underline underline-offset-4" href="mailto:hello@askgizelle.com">
                hello@askgizelle.com
              </a>
            </div>
            <div className="text-right">
              <p>{`Built & Managed by The Lab`}</p>
              <p className="text-foreground/60">Architects of Digital Authority & Synthetic Personas - My LLM Media.</p>
              <button
                type="button"
                onClick={() => window.location.assign('/inquire')}
                className="mt-1 underline underline-offset-4"
              >
                Learn how we built @askgizelle
              </button>
            </div>
          </div>
        </div>
      </section>

      <ScrollTopButton />
    </main>
  );
}
