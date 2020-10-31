import Icon from '../../assets/peacock.svg';
import DataSource from '../data/data-source.js';
import cookie from '../data/cookie.js';

const main = () => {

    let isLoggedIn;
    const token = cookie.getCookie('auth-token');
    if (token) isLoggedIn = true; else isLoggedIn = false;

    if (!isLoggedIn) {
        const images = document.getElementsByTagName('img');
        images[0].setAttribute('src', Icon);

        const inputEmail = document.getElementById('input-email');
        const inputPassword = document.getElementById('input-password');
        const signInButton = document.getElementById('signin-button');

        inputEmail.addEventListener('keyup', (event) => { onEnter(event, signInButton) });
        inputPassword.addEventListener('keyup', (event) => { onEnter(event, signInButton) });

        signInButton.addEventListener('click', async () => {
            const email = inputEmail.value;
            const password = inputPassword.value;

            try {
                const token = await DataSource.authenticate(email, password);
                cookie.setCookie('auth-token', token, 1);
            } catch (error) {
                alert(`Error: ${error}`)
            }
        });
    } else {
        const bodyElement = document.getElementsByTagName('body');
        bodyElement.removeChild();
        const tokenNode = document.createTextNode(`Already logged in with token : ${cookie.getCookie('auth-token')}`);
        const paragraphElement = document.createElement('p');
        paragraphElement.appendChild(tokenNode);
        bodyElement.appendChild(paragraphElement);
    }

}

const onEnter = (event, triggeredElement) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        triggeredElement.click();
    }
}

export default main;