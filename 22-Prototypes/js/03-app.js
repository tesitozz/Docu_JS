
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
};

const david = new Cliente('David',34040);

// const aaron = new Cliente('Aaron',1400);


Cliente.prototype.destructurar = function(){

    if(this.saldo <= 1500){

        tipo = 'Gold';

    } else if ( this.saldo  > 2500){

        tipo = 'Platino';

    } else {

        tipo = 'Normal';

    }

    return tipo;

    // console.log(`el nombre del usuario es ${this.nombre} y su saldo es de ${this.saldo}`);
    // console.log(this.saldo);

}

console.log(david.destructurar());

Cliente.prototype.buscarSaldo = function(){

    //Acceder a destructuras
    return  `El saldo es de ${this.saldo} y su tipo es de ${this.destructurar()}`;

};


console.log(david.buscarSaldo())

// console.log(aaron.buscarSaldo())

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;

}
david.retiraSaldo(10000);
// console.log(david);



//Instanciarlo

function Empresa(nombre,distrito){

    this.nombre = nombre;
    this.distrito = distrito;

}

const constructora = new Empresa('Constructora SAC','San Isidro');

// console.log(constructora);

Empresa.prototype.destructurarEmpresa = function(){

    // console.log('Desde nueva Empresa')

    console.log(`el nombre de la constructora es ' ${this.nombre} '  y su distrito es ' ${this.distrito} ' `)

};

constructora.destructurarEmpresa();











