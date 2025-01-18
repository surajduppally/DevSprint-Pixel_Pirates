const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cfmpassword').value;
    if (!signupForm.checkValidity()) {
        alert("Please fill out all required fields.");
        event.preventDefault();
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        event.preventDefault(); 
    }
});