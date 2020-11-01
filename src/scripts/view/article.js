export default function (token, type) {
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.innerHTML = '';
    bodyElement.style.backgroundColor = 'white';

    const titleInput = document.createElement('input');
    titleInput.id = 'article-title-input';
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'article-description-input';
    descriptionInput.rows = 5;
    descriptionInput.cols = 50;

    const buttonText = document.createTextNode('Add Data');

    const addDatabButton = document.createElement('button');
    addDatabButton.id = 'article-add-data-button';
    addDatabButton.type = 'button';
    addDatabButton.appendChild(buttonText);

    bodyElement.appendChild(titleInput);
    bodyElement.appendChild(descriptionInput);
    bodyElement.appendChild(addDatabButton);
}