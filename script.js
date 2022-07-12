// Form DOM variables
const form = document.getElementById('form');
const username = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Event Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit');
});
