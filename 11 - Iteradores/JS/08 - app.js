// for In

const pendientes = ['Tarea', 'Comer', 'Estudiar'];

//Retorna los Indices en arrays

// for (let pendiente in pendientes) {
//     console.log(pendiente);
// }


const carros = {
    carro: 'PORSCHE',
    precio: 150,
    año: 2014
}

//Iterar sobre OBJETOS

// for (let propiedad in carros) {
//     console.log(`${carros[propiedad]}`)
// };

for (let [llave, valor] of Object.entries(carros)) {
    console.log(valor);
    console.log(llave)
}

