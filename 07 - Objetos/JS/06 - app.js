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


const {informacion: {fabricacion:{ pais} }} = product;

console.log(pais);