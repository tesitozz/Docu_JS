
//Llamar Funciones a otras
iniciarApp();


function iniciarApp() {

    console.log('Iniciando App..');
    segundaFuncion();
}


function segundaFuncion() {
    console.log('Segunda App...')
    usuarioAutenticado('David')
}

function usuarioAutenticado(nombre) {
    console.log('Iniciando Usuario Espere...')
    console.log(`Usuario Autenticado :  ${nombre}`);
}


