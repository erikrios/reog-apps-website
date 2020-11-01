import DataSource from '../data/data-source.js';

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
    descriptionInput.placeholder = 'Description';
    descriptionInput.rows = 30;
    descriptionInput.cols = 150;

    const buttonDataText = document.createTextNode('Add Data');

    const addDataButton = document.createElement('button');
    addDataButton.id = 'article-add-data-button';
    addDataButton.type = 'button';
    addDataButton.appendChild(buttonDataText);

    bodyElement.appendChild(titleInput);
    bodyElement.appendChild(descriptionInput);
    bodyElement.appendChild(addDataButton);

    const idInput = document.createElement('input');
    idInput.id = 'article-id-input';
    idInput.type = 'text';
    idInput.placeholder = 'Article ID';

    const imageInput = document.createElement('input');
    imageInput.id = 'article-image-input';
    imageInput.type = 'text';
    imageInput.placeholder = 'Image URL';

    const buttonImageText = document.createTextNode('Add Image');

    const addImageButton = document.createElement('button');
    addImageButton.id = 'article-add-image-button';
    addImageButton.type = 'button';
    addImageButton.appendChild(buttonImageText);

    bodyElement.appendChild(idInput);
    bodyElement.appendChild(imageInput);
    bodyElement.appendChild(addImageButton);

    addDataButton.addEventListener('click', async () => {
        await postArticle();
    });

    const postArticle = async () => {
        const title = titleInput.value;
        const description = descriptionInput.value;
        buttonDataText.nodeValue = 'Adding Data...';

        try {
            const article = DataSource.postArticle(token, title, description, type);
            alert('Success');
            buttonDataText.nodeValue = 'Add Data';
            titleInput.value = '';
            descriptionInput.value = '';
            idInput.value = article._id;
        } catch (error) {
            buttonDataText.nodeValue = 'Add Data';
            alert(`Error: ${error}`);
        }
    }
}