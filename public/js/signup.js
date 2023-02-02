const connection = require('connection.js');

const signup = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    const username = document.querySelector('#username-input').value.trim();
    if (err) throw err;
    console.log("Connected!");
    var newUser = "INSERT INTO user (name, email, password) VALUES ('" + username + "', '" + email + "', '" + password + "')";

    connection.query(newUser, function (err, result) {
        if (err) throw err;
        console.log("Successfully registered!");
        document.location.replace('/');
    });
};


document.querySelector('#signup-submit').addEventListener('click', signup);