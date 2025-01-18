const loginForm = document.getElementById('loginForm');

        loginForm.addEventListener('submit', (event) => {
            if (!loginForm.checkValidity()) {
                alert("Please fill out all required fields.");
                event.preventDefault();
            }
        });