
//Object Literal
const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = product.nombre
// console.log(nombre)


// |--Extraer datos del Objeto - Destructuring--|

    // const { nombre } = product;
    // console.log(nombre)

    // const { precio } = product;
    // console.log(precio)

const { nombre, precio, disponible } = product;
console.log(nombre);
console.log(precio);
console.log(disponible);