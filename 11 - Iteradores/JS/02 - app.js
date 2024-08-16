//Break y Continue; en un foor loop


// for (let i = 0; i <= 10; i++) {

//     if (i == 5) {
//         console.log(` Cinco`);
//          break; rompe el foor loop
//         continue; 
//     }
//     console.log(` Numeros : ${i}`);

// };

const carrito = [
    {
        nombre: 'Monitor',
        precio: 200
    },
    {
        nombre: 'Celular',
        precio: 300,
        descuento: true
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
];

for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].descuento) {
        console.log(`El carrito ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)


}


