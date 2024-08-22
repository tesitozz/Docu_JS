
const mes = ['Enero', 'Febrero', 'Marzo'];

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

// sperad operator con arreglo de indices
const meses = [...mes, 'Abril'];

console.log(meses);

// 

const producto = { nombre: 'Teclado', precio: 100 };
const carito2 = [...carrito, producto];

console.log(carito2)
