
const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}


product.mostrarInfo();

