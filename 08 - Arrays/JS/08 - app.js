//Object Literal
const producto = {
    nombre: "Televisor de 24 Pulgadas",
    precio: 300,
    disponible: true
}

//Destructuring

const { nombre } = producto

console.log(nombre);


//Destructuring con arreglos - Tu decides el nombre

const numeros = [1, 2, 3, 4, 5];

//             1   -    2    -    3

// const [ primero , segundo , tercero] = numeros;


//     1 -  2 - 3

// const [, , tercero] = numeros;

//     1   -    2 -  { 3 - 4 - 5}


const [primero, segundo, ...tercero] = numeros;

console.log(tercero);


