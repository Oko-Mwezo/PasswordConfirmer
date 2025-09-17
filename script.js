document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMatchError = document.getElementById('passwordMatchError');
    const form = document.getElementById('registrationForm');

    // Password requirements
    const requirements = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };

    // Validate password on input
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        validatePassword(password);
    });

    // Confirm password on input
    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        validatePasswordMatch(password, confirmPassword);
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (validatePassword(password) && validatePasswordMatch(password, confirmPassword)) {
            alert('Password Succesfully Created');
            form.reset();
        }
    });

    // Validate password against requirements
    function validatePassword(password) {
        const hasLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);

        // Update requirement indicators
        requirements.length.classList.toggle('valid', hasLength);
        requirements.uppercase.classList.toggle('valid', hasUppercase);
        requirements.lowercase.classList.toggle('valid', hasLowercase);
        requirements.number.classList.toggle('valid', hasNumber);
        requirements.special.classList.toggle('valid', hasSpecial);

        return hasLength && hasUppercase && hasLowercase && hasNumber && hasSpecial;
    }

    // Validate password match
    function validatePasswordMatch(password, confirmPassword) {
        if (password !== confirmPassword) {
            passwordMatchError.textContent = 'Passwords do not match!';
            return false;
        } else {
            passwordMatchError.textContent = '';
            return true;
        }
    }
});
