const logout = async () => {
  console.log("Logout initiated");
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log("Successfully logged out");
    document.location.replace('/login');
  } else {
    alert(response.statusText);
    console.log("Error: " + response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
