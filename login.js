
// Function to show the Login Form
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

// Function to show the Signup Form
function showSignup() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}
