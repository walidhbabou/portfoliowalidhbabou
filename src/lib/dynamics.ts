// Small utilities to initialize reveal-on-scroll, simple parallax and a typewriter effect
export function initReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  if (document.documentElement.classList.contains('effects-disabled')) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll<HTMLElement>('.reveal').forEach(el => observer.observe(el));
}

let rafId: number | null = null;
let lastScroll = 0;
export function attachParallax() {
  if (typeof window === 'undefined') return;
  if (document.documentElement.classList.contains('effects-disabled')) return;

  const onScroll = () => {
    lastScroll = window.scrollY || window.pageYOffset;
    if (rafId == null) rafId = window.requestAnimationFrame(runParallax);
  };

  function runParallax() {
    rafId = null;
    const blobs = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const mobileFactor = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--parallax-mobile-factor') || '0.35');
    for (const el of blobs) {
      const depthAttr = (el.dataset.parallax) || '0.2';
      let depth = Number.parseFloat(depthAttr);
      // reduce parallax on small screens
      if (window.innerWidth < 768) depth = Math.max(0.01, depth * mobileFactor);
      const movement = lastScroll * depth;
      el.style.transform = `translateY(${movement}px)`;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // run once
  runParallax();
}

export function typeWrite(el: HTMLElement | null, text?: string, ms?: number) {
  if (!el) return;
  const final = text ?? el.dataset.text ?? el.textContent ?? '';
  const defaultMs = Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--typewriter-ms') || '60', 10);
  const interval = ms ?? defaultMs;
  el.textContent = '';
  let i = 0;
  function step() {
    if (i <= final.length) {
      el.textContent = final.slice(0, i);
      i++;
      setTimeout(step, interval + (Math.random() * 30));
    }
  }
  step();
}
