const carrito = [];

//definir un producto

const producto = {

    nombre: 'Monitor',
    precio: 200,

}

//.push para agregar al final de un arreglo
//Se le llama de forma interactiva
carrito.push(producto);


//Agregar un producto al inicio

const producto3 = {

    nombre: 'Celular',
    precio: 300

}

carrito.unshift(producto3)
console.table(carrito)

