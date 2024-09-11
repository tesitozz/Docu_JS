
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
};

const david =  new Cliente('David',1500);


function formatearCliente(cliente){

    const { nombre,saldo} =  Cliente;

    return ` el nombre es ${nombre} y su saldo es ${saldo}`;

};

console.log(formatearCliente(david));


//Otro ejercicio

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria  = categoria
};

const aaron =  new Empresa('Aaron SRC',1500,'Business');


function destructurarEmpresa(empresa){

    const { nombre ,saldo,categoria} = empresa;

    return `el Nombre de la empresa es ${nombre} y su saldo es de ${saldo} y
     la categoria es ${categoria}`

};

console.log(destructurarEmpresa(aaron));

