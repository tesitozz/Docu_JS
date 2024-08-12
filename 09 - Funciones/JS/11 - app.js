const carrito = [
    {
        nombre: ' Monitor', precio: 200
    },
    {
        nombre: 'Tv', precio: 200
    },
    {
        nombre: 'Celular', precio: 150
    },
    {
        nombre: 'Tablet', precio: 120
    }
]

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio ${producto.precio}`);
carrito.forEach(producto => console.log(`${producto.nombre} - Precio ${producto.precio}`));



