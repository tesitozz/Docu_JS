// .every

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
    }
];


const resultado = carrito.every(producto => producto.precio < 300);
console.log(resultado)


//Que al mens un objeto cumpla
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2)