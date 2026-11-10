import { useEffect } from 'react';

const MAX_ZOOM = 1.4;
const MIN_ZOOM = 0.7;

/*
 * Makes every homepage section fill exactly one screen on laptops and
 * desktops: each section's content is measured at normal size, then zoomed
 * in (up to 1.3x) to use the empty space, or down if it would spill over.
 * Phones keep normal text size and simply scroll.
 */
const FitScreens = () => {
  useEffect(() => {
    const fit = () => {
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      document.querySelectorAll<HTMLElement>('.screen').forEach((section) => {
        const wrap = section.querySelector<HTMLElement>(':scope > .wrap');
        if (!wrap) return;
        wrap.style.zoom = '1';
        if (!desktop) return;
        const cs = getComputedStyle(section);
        // Measure against the screen, not the section (which grows if content overflows)
        const room = window.innerHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        const extra = Array.from(section.children)
          .filter((c) => c !== wrap)
          .reduce((sum, c) => sum + (c as HTMLElement).offsetHeight, 0);
        const target = room - extra;
        const clamp = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));

        // Measure the content at its own height, not stretched by flex-1
        wrap.style.flex = '0 0 auto';
        const natural = wrap.offsetHeight;
        if (!natural) {
          wrap.style.flex = '';
          return;
        }
        // Zooming in narrows the text column, so lines rewrap and the block
        // grows more than linearly. Check the real height and step down until it fits.
        let zoom = clamp(target / natural);
        for (let i = 0; i < 5; i++) {
          wrap.style.zoom = zoom.toFixed(3);
          const h = wrap.getBoundingClientRect().height;
          if (h <= target + 1 || zoom <= MIN_ZOOM) break;
          zoom = clamp(zoom * (target / h) * 0.995);
        }
        wrap.style.flex = '';
      });
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };

    fit();
    document.fonts?.ready.then(schedule);
    window.addEventListener('load', schedule);
    window.addEventListener('resize', schedule);
    // Lazy images change a section's height when they arrive; load doesn't bubble, so capture it
    const onAssetLoad = (e: Event) => e.target instanceof HTMLImageElement && schedule();
    document.addEventListener('load', onAssetLoad, true);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('load', onAssetLoad, true);
      window.removeEventListener('load', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return null;
};

export default FitScreens;
