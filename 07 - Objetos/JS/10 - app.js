
const product = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true
}


const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(product);
console.log(medidas);


const resultado = Object.assign(product, medidas);
console.log(resultado)

// Spread Operator o Rest Aparateor
// const resultado2 = { ...product, ...medidas }
// console.log(resultado2)

