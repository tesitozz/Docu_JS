
//Operador Ternario

const autenticado = true;

const puedePagar = false;

// if = "?"  , else = ": "
console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No no esta Autenticado');


const efectivo = 300;

const credito = 400;

const disponible = efectivo + credito;

const totalPagar = 600;

//Se llama if anidado
if (efectivo > totalPagar || credito < totalPagar || disponible > totalPagar) {

    if(efectivo > totalPagar){

        console.log('Si pagaste con efectivo')

    } else{
        console.log('Otra forma de pago')
    }

} else {

    console.log('FONDOS INSUFICIENTES CARAJO')
}