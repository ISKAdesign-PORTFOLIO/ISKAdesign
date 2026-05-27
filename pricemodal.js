<script>
document.getElementById('open-price-list').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('price-modal').classList.add('modal--visible');
});

// obsługa zamykania okna
document.querySelector('.modal__close').addEventListener('click', function() {
  document.getElementById('price-modal').classList.remove('modal--visible');
});

// zamykanie po kliknięciu poza obrazem
document.getElementById('price-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('modal--visible');
  }
});
</script>
