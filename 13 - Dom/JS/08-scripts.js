
//Travesing the DOM

const navegar = document.querySelector('.navegacion');

console.log(navegar.firstElementChild);

console.log(navegar.lastElementChild); //ULTIMO ELEMENTO


console.log(navegar.childNodes); // Los espacios en blanco son condierados elementos

console.log(navegar.children[0].nodeName);

console.log(navegar.children[1].nodeType);

const card = document.querySelector('.card');

card.children[0].src = 'img/hacer3.jpg'

console.log(card.children[0]);

// Traveresing the hijo al padre

// console.log(card.parentElement.parentElement.parentElement);

//Accder a otro Card
// console.log(card.nextElementSibling.nextElementSibling);

//previusElementSibling recorre de atras hacia adelante

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling)


