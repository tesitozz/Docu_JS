
// For Each y Map

// const pendientes = ['Tarea', 'Comer', 'Estudiar'];

// pendientes.forEach((pendiente, indice) => 
//     console.log(`${indice}: ${pendiente}`));


const carrito = [
    {
        nombre: 'Monitor',
        precio: 200
    },
    {
        nombre: 'Celular',
        precio: 300
    },
    {
        nombre: 'Tablet',
        precio: 300
    },
    {
        nombre: 'Audifonos',
        precio: 600
    },
    {
        nombre: 'Mouse',
        precio: 100
    }
]

//No te crea un Nuevo Arreglo
const nuevoArreglo1 = carrito.forEach(producto => producto.nombre);

//Nuevo Arreglo
const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo1);

console.log(nuevoArreglo2);
