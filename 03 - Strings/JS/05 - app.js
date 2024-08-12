
//Modificar una variable
const producto = 'Monitor 20 Pulgadas';

console.log(producto);

//'Pulgadas' , 'Modificable'
console.log(producto.replace('Pulgadas', '"'))

//'Monitor' , 'Modificable'
console.log(producto.replace('Monitor', 'Monitor Curvo'))


// .slice para cortar
console.log(producto.slice(0, 10));

// Alternativa a slice

console.log(producto.substring(0, 10));


const usuario = "David";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));

