// Login
const loginFormHandler = (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        document.location.replace('/home');
    } else {
        console.log('error');
    }
};
// Sign up
const signupFormHandler = (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        document.location.replace('/home');
    } else {
        console.log('error');
    }
};
// Login
const loginForm = document.querySelector('#login-form');
if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
}
// Sign Up
const signupForm = document.querySelector('#signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
}