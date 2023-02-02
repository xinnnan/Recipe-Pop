const loginFormHandler = async (event) => {
  console.log("Login Button Pressed");
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
      console.log("Login Success");
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const toSignupPage = async (event) => {

  document.location.replace('/signup')
};

document
  .querySelector('.login-fields')
  .addEventListener('submit', loginFormHandler);

  document
  .querySelector('.to-signup')
  .addEventListener('click', toSignupPage);
