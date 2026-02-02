document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const bsCollapse = new bootstrap.Collapse(menu, {
      toggle: false
    });

    // klik w hamburger
    toggler.addEventListener('click', () => {
      toggler.classList.toggle('active');
    });

    // klik w link w menu (mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        bsCollapse.hide();
        toggler.classList.remove('active');
      });
    });
  });
