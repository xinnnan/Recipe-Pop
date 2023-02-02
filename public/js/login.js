const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const toSignupPage = async (event) => {
try {
  res.render('signup');
} catch (err) {
  res.status(500).json(err);
}
};

document
  .querySelector('.submit-button')
  .addEventListener('submit', loginFormHandler);

  document
  .querySelector('.to-signup')
  .addEventListener('click', toSignupPage);
