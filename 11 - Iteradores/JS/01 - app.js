
// For Loop

// for (let i = 0; i <= 10; i++) {

//     console.log(` Numeros : ${i}`);


// };

//Identificar pares y impares

// for (let i = 1; i <= 20; i++) {

//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es par`)
//     } else {
//         console.log(`El numero ${i} es impar`)

//     }

// }

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

console.log(carrito.length);


//Recorer el array
for (let i = 0; i < carrito.length; i++) {

    console.log(carrito[i].nombre);

};

