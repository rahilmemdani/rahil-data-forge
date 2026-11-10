import { useEffect } from 'react';

/*
 * Adds `.in` to `.reveal` and `.hl` elements the first time they scroll into
 * view. One IntersectionObserver for the whole page keeps this cheap on phones.
 */
const Effects = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal, .hl');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    // Anything already on the first screen shows straight away
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        }),
      // Sections fill the whole screen, so content can sit right at the bottom edge
      { rootMargin: '0px 0px -2% 0px', threshold: 0.05 },
    );
    els.forEach((el) => !el.classList.contains('in') && io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
};

export default Effects;
