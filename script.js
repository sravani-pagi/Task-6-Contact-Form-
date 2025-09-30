const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;

  // Name
  if (nameField.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Email
  if (emailField.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!validateEmail(emailField.value.trim())) {
    emailError.textContent = 'Email is invalid.';
    isValid = false;
  }

  // Message
  if (messageField.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = 'Thank you! Your message has been received.';
    form.reset();
  }
});
