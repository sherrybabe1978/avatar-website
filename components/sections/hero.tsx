'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type IconComponent = React.ComponentType<{ className?: string }>;

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  readMoreText?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: IconComponent; href: string }[];
  locationText: string;
  locationHref?: string;
  showInstagramOnLocation?: boolean;
  className?: string;
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: IconComponent;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  readMoreText = 'Read More',
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  locationHref,
  showInstagramOnLocation,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[100svh] w-full flex-col items-center justify-between overflow-hidden bg-background px-5 py-6 font-sans sm:px-6 md:h-screen md:px-10 md:py-10 lg:px-12',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%272%27 stitchTiles=%27stitch%27/></filter><rect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27 opacity=%270.9%27/></svg>")',
        }}
      />

      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </motion.button>
      </header>

      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-6 py-4 sm:gap-8 md:grid-cols-[1.25fr_0.75fr] md:gap-10 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-30 order-2 flex w-full flex-col items-center text-center md:order-1 md:items-start md:text-left md:max-w-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={`${overlayText.part1}-${overlayText.part2}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,15vw,8rem)] font-extrabold leading-[0.92] tracking-[0.01em] [font-kerning:none] text-foreground"
            >
              {overlayText.part1}
              {overlayText.part2 ? <><br />{overlayText.part2}</> : null}
            </motion.h1>
          </AnimatePresence>
          <p className="mt-6 w-full max-w-none text-sm leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            {readMoreText}
          </a>
        </motion.div>

        <div className="relative order-1 flex h-full items-center justify-center overflow-visible md:order-2 md:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-10 h-[72vw] w-[72vw] max-h-[300px] max-w-[300px] rounded-full bg-orange-500/10 blur-3xl md:h-[400px] md:w-[400px] md:max-h-none md:max-w-none lg:h-[500px] lg:w-[500px]"
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-20 h-auto w-[58vw] max-w-[260px] scale-[1.08] object-cover sm:w-56 sm:max-w-none sm:scale-[1.24] md:w-64 md:scale-[1.45] lg:w-72 lg:scale-150"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/1f1f1f/ffffff?text=Avatar`;
            }}
          />
        </div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationHref ? (
            <a
              href={locationHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              {showInstagramOnLocation ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm8.9 1.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9A3.1 3.1 0 1 0 12 15a3.1 3.1 0 0 0 0-6.2Z" />
                </svg>
              ) : null}
              <span>{locationText}</span>
            </a>
          ) : (
            locationText
          )}
        </motion.div>
      </footer>
    </div>
  );
};
