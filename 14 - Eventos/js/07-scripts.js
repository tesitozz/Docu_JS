
const cardDiv = document.querySelector('.card');


//Identificar a lo que le damos click

cardDiv.addEventListener('click', e => {

    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo')
    }

    if (e.target.classList.contains('precio')) {
        console.log('Diste click en precio')
    }

    if (e.target.classList.contains('card')) {
        console.log('Diste click en card')
    }

})