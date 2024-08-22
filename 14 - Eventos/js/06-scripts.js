
//Event Bubbling

const cardDiv = document.querySelector('.card');

const carInfo = document.querySelector('.info');

const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card')
});

carInfo.addEventListener('click', (e) => {
    e.stopPropagation();

    console.log('click en info')
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();

    console.log('click en titulo')
});

