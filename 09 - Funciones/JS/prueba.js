
let pais = "Peru";

let mensaje;

function iniciarApp() {

    console.log('El sistema se esta prendiendo');

    descuentos();
}

iniciarApp();

function descuentos(pais) {

    if (pais == "Peru") {

        mensaje = "Es de 13.50";

    } else if (pais == "Argentina" || pais == "Bolivia") {

        mensaje = "Es de 20.50"

    } else {

        mensaje = "No se encontro";

    }
}

//Asignamos a la variable resultado el valor de pais - mensaje

let resultado = descuentos(pais);

console.log(`el ${pais} tiene descuento de ${mensaje}`)