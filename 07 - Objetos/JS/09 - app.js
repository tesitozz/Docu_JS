"use strict";

const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true
}

//Sellar el Objeto


//No se puede agregar ni eliminar pero si modificar las existentes dentro del producto
Object.seal(product);

product.disponible = false;

// product.imagen = "imagen.png"

// delete product.precio;

console.log(product);


console.log(Object.isSealed(product))

