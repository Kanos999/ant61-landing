import { useEffect, useRef } from 'react';

/**
 * Returns a ref whose `.current` is a normalized scroll progress in [0, 1].
 * Uses the document scroll height, so page height determines the animation range.
 */
export function useScrollProgress() {
  const progressRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll =
        (document.documentElement.scrollHeight || 0) - (window.innerHeight || 0);

      if (maxScroll <= 0) {
        progressRef.current = 0;
        return;
      }

      const raw = scrollTop / maxScroll;
      progressRef.current = Math.min(1, Math.max(0, raw));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progressRef;
}
