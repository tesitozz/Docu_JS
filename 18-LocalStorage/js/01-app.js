
localStorage.setItem('nombre', 'David');

const productos = [{
    nombre: 'David',
    apellido: 'Sanchez',
    edad : 20
}]

const productosString = JSON.stringify(productos);

console.log(productosString);

localStorage.setItem('productos', productosString );


const meses =  [ 'Enero','Febrero','Marzo'];

const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString );