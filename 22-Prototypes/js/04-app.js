
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
};

const david = new Cliente('David',34040);

Cliente.prototype.destructurar = function(){

    if(this.saldo <= 1500){

        tipo = 'Gold';

    } else if ( this.saldo  > 2500){

        tipo = 'Platino';

    } else {

        tipo = 'Normal';

    }

    return tipo;

    // console.log(this.saldo)
}


Cliente.prototype.buscarSaldo = function(){

    //Acceder a destructurar
    return  `El saldo es de ${this.saldo} y su tipo es de ${this.destructurar()}`;

};

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;

}

//Heredar de cliente

function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;

}

Persona.prototype = Object.create ( Cliente.prototype );

Persona.prototype.constructor = Cliente;


//Instanciar

const aaron = new Persona('Aaron',1500,98429088);

console.log(aaron);


console.log(aaron.buscarSaldo())


Persona.prototype.mostrarTelefono = function(){
    return  `el telefono del usuario ${this.nombre} es el ${this.telefono}` 
};

console.log(aaron.mostrarTelefono());



