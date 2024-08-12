//Object Literal
const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
            medidas: {
                peso: "1kg",
                medida: "1m"
            },
            fabricacion :{
                pais : 'Peru',
                codigoExportacion : 1400
            }
    }
}

console.log(product);

console.log(product.informacion);

console.log(product.informacion.fabricacion.pais);

