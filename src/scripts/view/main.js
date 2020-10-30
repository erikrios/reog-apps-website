import Icon from '../../assets/peacock.svg';
import DataSource from '../data/data-source.js';
const main = () => {
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
            alert(`Token: ${token}`);
        } catch (error) {
            alert(`Error: ${error}`)
        }
    })
}

const onEnter = (event, triggeredElement) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        triggeredElement.click();
    }
}

export default main;