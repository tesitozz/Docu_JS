
//.concat


const mes1 = ['Enero', 'Febrero', 'Marzo'];
const mes2 = ['Abril', 'Junio'];
const mes3 = ['Julio', 'Agosto'];

//.concat
const resultado1 = mes1.concat(mes2, mes3);
console.log(resultado1);

// spreadd operator

const resultado2 = [...mes1, ...mes2, ...mes3];

console.log(resultado2);