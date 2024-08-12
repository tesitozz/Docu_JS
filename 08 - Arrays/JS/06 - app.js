
//Array Vacio

const carrito = [];

//definir un producto

const producto = {
    nombre: 'Monitor',
    precio: 200,
}
const producto2 = {
    nombre: 'Celular',
    precio: 300
}
const producto3 = {
    nombre: 'Tablet',
    precio: 150
}

let resultado;


//Forma Declarativo

resultado = [...carrito, producto]

resultado = [...resultado, producto2]

//Agregar al Final
resultado = [producto3, ...resultado]


console.table(resultado)


