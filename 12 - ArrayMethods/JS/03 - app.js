//.reduce

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
    }
];


//con un forEach

let total = 0;

carrito.forEach(producto => total += producto.precio);
console.log(total)

//con un reduce

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado)