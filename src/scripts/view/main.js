const main = () => {
    let body = document.getElementsByTagName('body');
    let font = document.createElement('font');
    let message = document.createTextNode('Hello, World!');

    font.appendChild(message);
    body[0].appendChild(font);
    font.setAttribute('color', 'red');
}

export default main;