
const carrito = [
    {
        nombre: 'Monitor',
        precio: 200
    },
    {
        nombre: 'Celular',
        precio: 300
    },
    {
        nombre: 'Tablet',
        precio: 300
    },
    {
        nombre: 'Audifonos',
        precio: 600
    },
    {
        nombre: 'Mouse',
        precio: 100
    }
]

//Recorrer

// for (let i = 0; i < carrito.length; i++) {
//     console.log(`${carrito[i].nombre}- Precio ${carrito[i].precio}`);
// }

carrito.forEach(function (prodpucto) {
    console.log(`${producto.nombre} - Precio : ${producto.precio}`)
})