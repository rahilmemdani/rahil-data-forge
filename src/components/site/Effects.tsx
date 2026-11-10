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
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
};

export default Effects;
