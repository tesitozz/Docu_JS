//Switch Case

const metodoPago = 'Tarjetas';

switch (metodoPago) {
    case "Efectivo":
        console.log('Si se puede');
        break;
    case "Tarjetas":
        console.log(`Pagando con ${metodoPago}`)
        pagar();
        break;
    default:
        console.log('No se puede');
        break;

}

function pagar() {

    console.log('Pagando..')
}