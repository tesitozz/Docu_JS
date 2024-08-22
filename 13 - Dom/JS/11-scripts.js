const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarFootr);

function mostrarFootr() {

    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Footer';

    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'Cerrar';
    }

    console.log(footer.classList)
}



