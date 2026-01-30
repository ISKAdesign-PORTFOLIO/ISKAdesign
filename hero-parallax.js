// Parallax tylko na desktopie
if (window.innerWidth > 992) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    const video = document.querySelector(".hero-video");
    const photo = document.querySelector(".hero-photo-main");
    const shape2 = document.querySelector(".hero-shape2");



    if (photo) {
      photo.style.transform =
        `translateY(-50%) translate(${x * 10}px, ${y * 10}px)`;
    }

    if (shape2) {
      shape2.style.transform =
        `translate(${x * 30}px, ${y * 30}px)`;
    }
  });
}
