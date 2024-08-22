// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
console.log(header);


const body = document.getElementsByClassName('hero');
console.log(body);

//Si las clases existen mas de una vez


const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);



//Si una clase no existe

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste)