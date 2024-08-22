
const formu = document.querySelector('#formulario');

formu.addEventListener('submit', validarFormu);

function validarFormu(e) {

    e.preventDefault();

    console.log('Consultar una api...')

    console.log(e.target.action);

};