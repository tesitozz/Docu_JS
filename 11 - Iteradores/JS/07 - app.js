// For of

const pendientes = ['Tarea', 'Comer', 'Estudiar'];

//Arreglo de Objetos
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

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre)
}