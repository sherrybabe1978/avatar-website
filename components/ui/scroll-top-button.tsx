'use client';

import { useEffect, useState } from 'react';

export function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
      className="fixed bottom-5 right-5 z-50 border border-white/25 bg-black/60 px-3 py-2 text-xs tracking-wide text-foreground backdrop-blur transition hover:bg-black/80"
      aria-label="Scroll to top"
    >
      ↑ TOP
    </button>
  );
}
