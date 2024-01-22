// Login
const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!username || !password) {
        document.getElementById('error-message').textContent = 'Empty field. Please check your input.';
        showModal();
        return;
    }

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/home');
        } else {
            console.log('Something went wrong')
        }
    }
};
// Sign up
const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.ok) {
            document.location.replace('/home');
        } else {
            console.log('Something went wrong')
        }
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