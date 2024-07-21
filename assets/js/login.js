document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve input values
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    
    // Show loading spinner
    var loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.display = 'block';

    // Disable submit button during loading
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Simulate backend validation (replace with actual logic)
    setTimeout(function() {
        // Enable submit button after loading
        submitButton.disabled = false;

        // Hide loading spinner
        loaderWrapper.style.display = 'none';

        if (email === 'alvinconnal1960@gmail.com' && password === 'alvinconnal196012345') {
            // Correct credentials, redirect to dashboard.html
            window.location.href = '/dashboard.html';
        } else {
            // Incorrect credentials, show error message
            alert('Wrong email or password. Please login with correct credentials.');
        }
    }, 2000); // Simulate a 2-second delay for demonstration
});


