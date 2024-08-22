
//Generar HTML desde js

//Crear un Nuevo A
const enlace = document.createElement("A");

//Generar el texto del Enlace ( " A ");
enlace.textContent = 'Nuevo Enlace';

//Añadir el href
enlace.href = '/nuevoEnlace';

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

//Agrerle clase

enlace.classList.add('Alguna-clase');

enlace.onclick = miFuncion;

//Seleccionar la navegacion

const navegacion = document.querySelector('.navegacion');

//Agregar al Nav
// navegacion.appendChild(enlace);

// Ver las posiciones de navegacion
// console.log(navegacion.children);

//Manejarlo
navegacion.insertBefore(enlace, navegacion.children[1]);


function miFuncion() {
    alert('Diste Click');
};


//Crear un card de forma Dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por Persona';
parrafo3.classList.add('precio');




// Crear div con la clase info

const info = document.createElement('div');

info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imaggen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'TEXTO ALTERNATIVO';


//Crear el card

const card = document.createElement('div');

card.classList.add('card');

//Asignar la imagen

card.appendChild(imagen);

//Asignar Info

card.appendChild(info);


//Insertar en el Html

const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[1]);








































