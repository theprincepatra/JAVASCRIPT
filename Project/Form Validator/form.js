const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();  // built-in function of the addEventListener
  validateForm();
});

function validateForm() {
  let isValid = true;

  // Email validation
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Enter a valid email');
    isValid = false;
  } else {
    setSuccess(email);
  }

  // Password validation
  const passwordValue = password.value.trim();
  if (passwordValue === '') {
    setError(password, 'Password can\'t be empty required');
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  }
}

function setError(input, message) {
  const errorElement = input.nextElementSibling.nextElementSibling;  //track the error class
  errorElement.textContent = message;
}

function setSuccess(input) {
  const errorElement = input.nextElementSibling.nextElementSibling;
  errorElement.textContent = '';
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
