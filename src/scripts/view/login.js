import Icon from '../../assets/peacock.svg';
import DataSource from '../data/data-source.js';
import cookie from '../data/cookie.js';
import renderDashboard from './dashboard.js';

const onEnter = (event, triggeredElement) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        triggeredElement.click();
    }
}

export default function () {
    const card = document.createElement('div');
    card.setAttribute('id', 'login-card');

    const loginLogoImage = document.createElement('img');
    loginLogoImage.setAttribute('src', Icon);
    loginLogoImage.setAttribute('id', 'login-logo');
    loginLogoImage.setAttribute('alt', 'Reog Apps Logo');

    const inputField = document.createElement('div');
    inputField.setAttribute('id', 'login-input-field');

    const emailField = document.createElement('div');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('placeholder', 'Email Address');
    emailInput.setAttribute('id', 'login-email-input');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;

    const passwordField = document.createElement('div');

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    passwordInput.setAttribute('id', 'login-password-input');
    passwordInput.setAttribute('name', 'password');
    passwordInput.required = true;

    const signInButton = document.createElement('input');
    signInButton.setAttribute('type', 'button');
    signInButton.setAttribute('value', 'Sign In');
    signInButton.setAttribute('id', 'login-button');

    card.appendChild(loginLogoImage);
    card.appendChild(inputField);

    inputField.appendChild(emailField);
    inputField.appendChild(passwordField);
    inputField.appendChild(signInButton);

    emailField.appendChild(emailInput);

    passwordField.appendChild(passwordInput);

    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = ' rgb(214, 193, 183)';
    body.appendChild(card);

    emailInput.addEventListener('keyup', (event) => { onEnter(event, signInButton) });
    passwordInput.addEventListener('keyup', (event) => { onEnter(event, signInButton) });

    signInButton.addEventListener('click', async () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        signInButton.value = 'Authenticating...'

        try {
            signInButton.value = 'Sign In';
            const token = await DataSource.authenticate(email, password);
            cookie.setCookie('auth-token', token, 0.25);
            renderDashboard(token);
        } catch (error) {
            signInButton.value = 'Sign In';
            alert(`Error: ${error}`)
        }
    });
}