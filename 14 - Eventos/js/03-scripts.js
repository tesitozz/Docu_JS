
const busqueda = document.querySelector('.busqueda');


busqueda.addEventListener('input', (event) => {

    if (event.target.value === '') {
        console.log('fallo en la validacion')
    }
    console.log(event.target.value);
});
        
