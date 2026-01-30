document.querySelectorAll('.btn-view').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    const src = btn.dataset.src;

    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');

    // reset
    modalImg.classList.add('d-none');
    modalVideo.classList.add('d-none');
    modalVideo.pause();

    if (type === 'image') {
      modalImg.src = src;
      modalImg.classList.remove('d-none');
    }

    if (type === 'video') {
      modalVideoSource.src = src;
      modalVideo.load();
      modalVideo.classList.remove('d-none');
    }
  });
});
const modal = document.getElementById('portfolioModal');

modal.addEventListener('hidden.bs.modal', () => {
  const video = document.getElementById('modalVideo');
  video.pause();
  video.currentTime = 0;
});