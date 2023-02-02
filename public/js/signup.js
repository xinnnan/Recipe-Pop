const signup = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm').value.trim();
    
    if ((email && password && passwordConfirm) && (password == passwordConfirm)) {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up! Please try again');
        }
      }
    };


document.querySelector('.signup-fields').addEventListener('submit', signup);