//Array Vacio

const carrito = [];

//definir un producto

const producto = {
    nombre: 'Monitor',
    precio: 200,
}
const producto2 = {
    nombre: 'Celular',
    precio: 300
}
const producto3 = {
    nombre: 'Tablet',
    precio: 150
}

//Agregar Datos en General
carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3); //Agregar al Array carrito al primero


console.table(carrito);


// |--Eliminar ultimo elemento de un arreglo--|

    // carrito.pop();
    // console.table(carrito);

    // Eliminar del Inicio del Arreglo

    // carrito.shift();
    // console.table(carrito);

//Eliminar datos utilizando splice - escogiendo la id
var eliminar = carrito.splice(0,1)
console.table(carrito)
