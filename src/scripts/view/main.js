import cookie from '../data/cookie.js';
import renderLogin from './login.js';
import renderDashboard from './dashboard.js';

const main = () => {

    let isLoggedIn;
    const token = cookie.getCookie('auth-token');
    if (token) isLoggedIn = true; else isLoggedIn = false;

    if (!isLoggedIn) {
        renderLogin();
    } else {
        renderDashboard(token);
    }
}

export default main;