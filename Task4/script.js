document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const card = document.querySelector('.card');
    const toggleSwitch = document.getElementById('switch');
    const toggleContainer = document.querySelector('.toggle-container');
    const loginText = document.querySelector('.toggle-text.login');
    const signupText = document.querySelector('.toggle-text.signup');

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            card.classList.add('flipped');
            body.classList.add('signup-mode');
            loginText.style.color = 'var(--text-color)';
            signupText.style.color = 'var(--signup-accent)';
            toggleContainer.style.transform = 'translateX(-50%) rotateY(180deg)';
        } else {
            card.classList.remove('flipped');
            body.classList.remove('signup-mode');
            loginText.style.color = 'var(--login-primary)';
            signupText.style.color = 'var(--text-color)';
            toggleContainer.style.transform = 'translateX(-50%) rotateY(0)';
        }
    });
});
