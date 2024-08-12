
const usuario = false;

const puedePagar = false;

if (usuario && puedePagar) {

    console.log('Si eres Usuario')

} else if (!usuario) {

    console.log('Inicia Sesion o registrate')

} else if (!puedePagar) {

    console.log('Fondos Insuficientes')
}


else {

    console.log('NO  puede pagar')
}