
// .find

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

// con un forEach

let resultado = "";

carrito.forEach((producto, index) => {
    if (producto.nombre === 'Monitor') {
        resultado = carrito[index];
    }
});

console.log(resultado)

//con .find

const resultado2 = carrito.find((producto => producto.nombre === 'Tablet'));

console.log(resultado2);




