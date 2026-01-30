// contact.js – obsługa formularza kontaktowego z EmailJS

// Pobranie formularza i miejsca na komunikaty
const form = document.getElementById('contactform');
const formMessage = document.getElementById('formMessage');

// Obsługa submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // zatrzymujemy standardowe wysłanie formularza

  // Pobranie wartości pól
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Prosta walidacja
  if (!name || !email || !message) {
    formMessage.textContent = "Proszę wypełnić wszystkie pola!";
    formMessage.style.color = "red";
    return;
  }

  // Walidacja e-maila
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Podaj poprawny adres e-mail!";
    formMessage.style.color = "red";
    return;
  }

  // Wysyłka przez EmailJS
  emailjs.send("service_038nnr6", "template_quwwdiq", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    formMessage.textContent = "Dziękujemy! Wiadomość została wysłana.";
    formMessage.style.color = "green";
    form.reset();
  }, function(error) {
    formMessage.textContent = "Ups! Coś poszło nie tak, spróbuj ponownie.";
    formMessage.style.color = "red";
    console.error("EmailJS error:", error);
  });
});
