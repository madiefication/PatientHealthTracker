window.onload = function () {
    var nameInput = document.getElementById("name");
    nameInput.addEventListener("input", validateName);

    var loginForm = document.querySelector('.login-container form');
    loginForm.addEventListener('submit', validateLogin);
};

function validateName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var pattern = /\d/;
    var isValid = !pattern.test(name);

    if (!isValid) {
        nameInput.setCustomValidity("Name should not contain numbers.");
    } else {
        nameInput.setCustomValidity("");
    }
}

function validateLogin(event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // You can add more sophisticated validation here if needed.

    // For a basic example, let's check if both fields are not empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
    } else {
        // Submit the login form
        event.target.submit();
    }
}
