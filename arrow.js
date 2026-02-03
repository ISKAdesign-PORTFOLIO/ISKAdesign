document.addEventListener("DOMContentLoaded", () => {
  const portfolio = document.querySelector(".portfolio-section");
  const hint = document.querySelector(".portfolio-scroll-hint");

  if (!portfolio || !hint) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      hint.style.opacity = entry.isIntersecting ? "1" : "0";
    },
    {
      threshold: 0.2
    }
  );

  observer.observe(portfolio);
});
