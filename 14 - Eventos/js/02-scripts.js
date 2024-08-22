const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacions');


    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick', () => {
    console.log('Entrando a la navegacions');

    nav.style.backgroundColor = 'white';

});


//mousedown - similar al click

// click

// dblclick = doble click

//mouseup - cuando sueltas el mouse

