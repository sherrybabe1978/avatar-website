'use client';

import { useEffect, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { MinimalistHero } from '@/components/sections/hero';
import { CtaCard } from '@/components/ui/cta-card';

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
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <section id="top">
        <MinimalistHero
          logoText="@askgizelle"
          navLinks={[
            { label: 'THE PROTOCOL', href: '#protocol' },
            { label: 'THE SCIENCE', href: '#science' },
            { label: 'STRATEGY', href: '#strategy' },
            { label: 'SYSTEM ARCHITECTURE', href: '#system-architecture' },
            { label: 'CONNECT', href: '#contact' },
          ]}
          mainText="Ever wonder why almost every man loves the smell of vanilla? It’s not just because it’s sweet. Psychologists believe it’s a 'Comfort Trigger.' Vanilla is one of the closest scents in nature to the sweetness of human breast milk. When a man smells warm, subtle vanilla or musk, his brain releases Oxytocin—the bonding hormone. It lowers his guard and makes him want to move closer, whereas sharp, chemical florals trigger an 'alarm' response that makes him back away."
          readMoreLink="#protocol"
          readMoreText="→ ACCESS SYSTEM PROTOCOL"
          imageSrc="/images/avatar-hero.png"
          imageAlt="Talking head avatar portrait"
          overlayText={
            isStrategyInView
              ? { part1: 'SYSTEM', part2: 'LOGIC' }
              : { part1: 'SCENT', part2: 'LOGIC' }
          }
          socialLinks={[
            { icon: Instagram, href: 'https://instagram.com/askgizelle' },
            { icon: Mail, href: 'mailto:hello@myllm.news' },
            { icon: MessageCircle, href: '#contact' },
          ]}
          locationText="@askgiselle"
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
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">THE BIOLOGICAL BLUEPRINT</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Attraction is not a choice; it is a chemical reaction. While the rational 
            brain processes words and logic, the Olfactory System sends signals directly 
            to the Limbic System; the brain’s ancient seat of emotion, memory, and desire.
          </p>
        </div>
      </section>

      <section id="strategy" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <CtaCard
            imageSrc="/images/box2.jpg"
            imageAlt="Management and architecture visual"
            title="STRATEGY"
            subtitle="MANAGEMENT & ARCHITECTURE"
            description="We offer bespoke brand architecture for elite creators. From synthetic persona incubation to full-scale system management, we build the 'Scent' of your brand from the ground up."
            buttonText="→ INQUIRE FOR PARTNERSHIP"
            onButtonClick={() => {
              window.location.assign('/inquire');
            }}
          />
        </div>
      </section>

      <section id="system-architecture" className="border-y border-white/10 bg-[#070b10] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">The Engine</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">SYSTEM ARCHITECTURE</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-foreground/80">
            We engineer Digital Authority through the lens of psychology and AI. Our agency builds high-fidelity personas and
            automated influence engines that turn audiences into ecosystems. We design the architecture; you own the
            influence.
          </p>
          <button
            type="button"
            onClick={() => window.location.assign('/inquire')}
            className="mt-8 inline-flex items-center border border-white/30 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            INQUIRE FOR MANAGEMENT
          </button>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 pt-8 md:px-12">
        <div className="mx-auto max-w-5xl border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/75">
            <div>
              CONNECT:{' '}
              <a className="underline underline-offset-4" href="mailto:hello@myllm.news">
                hello@myllm.news
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

      {showScrollTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 border border-white/25 bg-black/60 px-3 py-2 text-xs tracking-wide text-foreground backdrop-blur transition hover:bg-black/80"
          aria-label="Scroll to top"
        >
          ↑ TOP
        </button>
      ) : null}
    </main>
  );
}
