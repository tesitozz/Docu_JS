"use strict";

const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true
}

//Congela el objeto , no permite modificar ni agregar
Object.freeze(product);

// product.disponible = false;

// product.imagen = "imagen.png"

// delete product.precio;

console.log(product);

console.log(Object.isFrozen(product))

