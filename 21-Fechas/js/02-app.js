// https://momentjs.com/

let diaHoy =  new Date();

moment.locale('es')

// console.log(moment().format('MMMM Do YYYY h:mn A'));

console.log(moment().format('LTS'));
console.log(moment().add(3, 'days').calendar());




