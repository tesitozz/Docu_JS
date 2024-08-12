
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

// |--Recorrer--|

// carrito.forEach(function (producto) {
//     console.log(`${producto.nombre} - Precio : ${producto.precio}`)
// });


// |--  MAP --|

const nuevoArreglo = carrito.map(function (producto) {
    return `${producto.nombre} - Precio : ${producto.precio}`
});

console.log(nuevoArreglo)
