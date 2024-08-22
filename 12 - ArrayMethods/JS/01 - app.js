
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


// Comprobar si un valor existe en un arreglo

mes.forEach(meses => {
    if (meses === "Enero") {
        console.log('Si existe')
    }
});

//Funciona con un array tipo mes
const resultado = mes.includes('Enero');
console.log(resultado)

//En un arreglo de objeto se tiliza . some

const existe = carrito.some(
    producto => producto.nombre === "Celular");


console.log(existe);

//Enn arreglo tradicional cn .some

const existe2 = mes.some(
    mes => mes === "Febrero"
);

console.log(existe2)