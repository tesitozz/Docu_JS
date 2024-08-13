
const efectivo = 1000;

const credito = 400;

const disponible = efectivo + credito;

const totalPagar = 600;

// el "||" es OR , y && es and

if (efectivo > totalPagar || credito > totalPagar) {
    console.log('Si podemos Pagar')
} else {
    console.log('Fondos Insuficientes')
}