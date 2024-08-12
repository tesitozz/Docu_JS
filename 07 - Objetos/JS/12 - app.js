
//Object Literal
const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true
}

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}
//Para arriba
const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('lola', 200)
console.log(producto3)

