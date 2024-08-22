
//. filter

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

let resultado;

resultado = carrito.filter(producto =>
    producto.precio > 200
);

console.log(resultado)

//

let resultado2;

resultado2 = carrito.filter(
    (producto) => producto.nombre === "Celular");

console.log(resultado2);


// Para traer el array sin un element

resultado = carrito.filter(producto => producto.nombre !== "Tablet");


//Si quieres traer solo uno

resultado = carrito.filter(producto => producto.nombre === "Tablet");

console.log(resultado)