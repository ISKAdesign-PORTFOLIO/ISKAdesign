if (window.innerWidth > 992) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5; // -0.5 → 0.5
    const y = (e.clientY / window.innerHeight) - 0.5;

    const video = document.querySelector(".hero-video");
    const photo = document.querySelector(".hero-photo-main");
    const shape2 = document.querySelector(".hero-shape2");

    if (video) {
      video.style.transform = `
        translateY(-50%)
        translate(${x * 15}px, ${y * 15}px)
        rotateX(${y * 15}deg)
        rotateY(${x * 15}deg)
        rotateZ(10deg)
        scale(0.95)
      `;
    }

    if (photo) {
      photo.style.transform = `
        translateY(-50%)
        translate(${x * 25}px, ${y * 25}px)
        rotateX(${y * 10}deg)
        rotateY(${x * 10}deg)
        rotateZ(-5deg)
        scale(1.05)
      `;
    }

    if (shape2) {
      shape2.style.transform = `
        translate(${x * 40}px, ${y * 40}px)
        rotateX(${y * 20}deg)
        rotateY(${x * 20}deg)
      `;
    }
  });
}
