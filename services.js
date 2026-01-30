const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  const icon = card.querySelector('.service-icon');

  card.addEventListener('mouseenter', () => {
    icon.style.transform = 'translateY(-10px)';
    icon.style.filter = 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))';
  });

  card.addEventListener('mouseleave', () => {
    icon.style.transform = 'translateY(0)';
    icon.style.filter = 'none';
  });
});
