module.exports = function(token) {
    const bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.innerHTML = '';
        bodyElement.style.backgroundColor = 'white';
        const tokenNode = document.createTextNode(`Already logged in with token : ${token}`);
        const paragraphElement = document.createElement('p');
        paragraphElement.appendChild(tokenNode);
        bodyElement.appendChild(paragraphElement);
}