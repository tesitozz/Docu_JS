
//Eliminar elementos del DOM

// const primerEnlace = document.querySelector('a');
// primerEnlace.remove();


//Eliminar desdd el padre...

const navegacion = document.querySelector('.navegacion');



navegacion.removeChild(navegacion.children[2]);

console.log(navegacion.children);
