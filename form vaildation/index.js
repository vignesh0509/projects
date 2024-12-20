// Form Validation Function
function validateSignup(event) {
    event.preventDefault(); // Prevent form submission to validate

    let isValid = true;

    // Validate Username (only letters, 3-20 chars)
    const username = document.getElementById('username').value;
    const usernameRegex = /^[A-Za-z]{3,20}$/;
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('usernameError').style.visibility = 'hidden';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('emailError').style.visibility = 'hidden';
    }

    // Validate Password (at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.visibility = 'hidden';
    }

    // Validate Password Confirmation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.visibility = 'visible';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.visibility = 'hidden';
    }

    if (isValid) {
        alert('Form is valid and ready for submission!');
        // Submit form (or handle further processing like API calls)
        // document.getElementById('signupForm').submit(); // Uncomment this line to actually submit the form
    }

    return isValid; // Return true if validation passed, false otherwise
}
