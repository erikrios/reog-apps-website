export default function (token) {

    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.innerHTML = '';
    bodyElement.style.backgroundColor = 'white';

    const container = document.createElement('div');
    container.id = 'dashboard-container';

    const newsCard = document.createElement('div');
    newsCard.id = 'dashboard-news-card';

    const sitesCard = document.createElement('div');
    sitesCard.id = 'dashboard-sites-card';

    const foodsCard = document.createElement('div');
    foodsCard.id = 'dashboard-foods-card';

    const historiesCard = document.createElement('div');
    historiesCard.id = 'dashboard-histories-card';

    const wallpaperCard = document.createElement('div');
    wallpaperCard.id = 'dashboard-wallpaper-card';

    const newsText = document.createTextNode('News');
    const newsTitle = document.createElement('h1');
    newsTitle.appendChild(newsText);
    newsTitle.className = 'dashboard-title';

    const sitesText = document.createTextNode('Sites');
    const sitesTitle = document.createElement('h1');
    sitesTitle.appendChild(sitesText);
    sitesTitle.className = 'dashboard-title';

    const foodsText = document.createTextNode('Foods');
    const foodsTitle = document.createElement('h1');
    foodsTitle.appendChild(foodsText);
    foodsTitle.className = 'dashboard-title';

    const historiesText = document.createTextNode('Histories');
    const historiesTitle = document.createElement('h1')
    historiesTitle.appendChild(historiesText);
    historiesTitle.className = 'dashboard-title';

    const wallpaperText = document.createTextNode('Wallpaper');
    const wallpaperTitle = document.createElement('h1')
    wallpaperTitle.appendChild(wallpaperText);
    wallpaperTitle.className = 'dashboard-title';

    newsCard.appendChild(newsTitle);
    sitesCard.appendChild(sitesTitle);
    foodsCard.appendChild(foodsTitle);
    historiesCard.appendChild(historiesTitle);
    wallpaperCard.appendChild(wallpaperTitle);

    container.appendChild(newsCard);
    container.appendChild(sitesCard);
    container.appendChild(foodsCard);
    container.appendChild(historiesCard);
    container.appendChild(wallpaperCard);

    bodyElement.appendChild(container);
}