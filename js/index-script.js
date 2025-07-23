const portfolio = document.getElementById('portfolio');
const numPhotos = 53;

for (let i = numPhotos; i>0; i--) {
    const portImg = document.createElement('img');
    portImg.setAttribute('src', `img/portfolio/${i}.jpg`);
    portImg.setAttribute('class', 'imgItem');
    portImg.setAttribute('alt', 'portfolioItem');
    portfolio.appendChild(portImg);
};
