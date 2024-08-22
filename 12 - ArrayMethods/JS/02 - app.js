//ARRAY - METHODS

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


mes.forEach((meses, index) => {
    if (meses === 'Enero') {
        console.log(`Encontrado en el indice ${index}`)
    }
});

//Encontrar el indice de abril


const indice = mes.findIndex(
    meses => meses === 'Enero');

console.log(indice);


//Encontrar un indice en un arreglo de objetos

const indice2 = carrito.findIndex(producto => producto.precio === 300);

console.log(indice2);




