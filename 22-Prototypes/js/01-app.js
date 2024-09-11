const cliente =  {
    nombre : 'David',
    saldo:  500
}

console.log(cliente);
console.log(typeof cliente);

                             // Prototype

//Object Constructor

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const david =  new Cliente('David',1500);

console.log(david);




