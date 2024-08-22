

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


//Acceder al texto 
console.log(encabezado.innerText); //Si en el CSS - visibility: hidden; no lo va a encontrar;

// Respeta los Espacios 
console.log(encabezado.textContent); //Si lo va a encontrar

//Trae todo el texto incluyendo los span etc
console.log(encabezado.innerHTML);


// const nuevoHeading = 'Nuevo Header'

// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const image = document.querySelector('.card img');
image.src = 'img/hacer2.jpg';
console.log(image);


//Acceder a un texto 
const titulo = document.querySelector('.card .titulo').textContent;
const nuevoTitu = 'La Kirex Estuvo Aqui';
document.querySelector('.card .titulo').textContent = nuevoTitu;