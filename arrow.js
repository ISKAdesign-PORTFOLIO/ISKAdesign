const portfolio = document.querySelector('.portfolio-section');
const hint = document.querySelector('.portfolio-scroll-hint');

const observer = new IntersectionObserver(
  ([entry]) => {
    hint.style.opacity = entry.isIntersecting ? '1' : '0';
  },
  { threshold: 0.3 }
);

observer.observe(portfolio);
