
//Retornar Variables

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 4);

console.log(resultado);

//Ejemplo mas Avanazdo

let total = 0;

function agregarCarrito(precio) {

    return total += precio;

}

function calcularImpuesto(total) {

    return total * 1.15;

}


agregarCarrito(400);
agregarCarrito(200);
agregarCarrito(300);


const totalPaga = calcularImpuesto(total);


console.log(total)

console.log(`El Total a Pagar seria ${totalPaga}`)

