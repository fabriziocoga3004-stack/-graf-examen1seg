// Obtener elementos
const image = document.getElementById('image');

const xSmallBtn = document.getElementById('xSmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const xLargeBtn = document.getElementById('xLargeBtn');

// Eventos

xSmallBtn.addEventListener('click', () => {
    image.style.width = '100px';
    image.style.height = 'auto';
});

smallBtn.addEventListener('click', () => {
    image.style.width = '200px';
    image.style.height = 'auto';
});

mediumBtn.addEventListener('click', () => {
    image.style.width = '300px';
    image.style.height = 'auto';
});

largeBtn.addEventListener('click', () => {
    image.style.width = '400px';
    image.style.height = 'auto';
});

xLargeBtn.addEventListener('click', () => {
    image.style.width = '550px';
    image.style.height = 'auto';
});
