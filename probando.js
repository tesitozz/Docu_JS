
function suma(a, b) {

    console.log(a + b)

}

suma(12, 50);

function nombres(nombres) {

    console.log(nombres)

}

nombres('David')



function multiplacacion(a, b) {

    return a * b;

}

const resultado = multiplacacion(10, 20);

console.log(resultado);


function desconocidos(nombre = "", apellido = "") {

    console.log(`El nombre del Usuario es ${nombre} y su apellido es ${apellido}`)

}

desconocidos('David',)