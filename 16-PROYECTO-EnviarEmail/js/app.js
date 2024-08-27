
document.addEventListener('DOMContentLoaded', function () {

    //Crear un objeto

    const email = {
        email: '',
        asunto: '',
        destinatario: '',
        mensaje: ''
    };


    console.log(email);


    //Seleccionar los elementos de la interfaz

    const inputEmail = document.querySelector('#email');

    // console.log(inputEmail)

    const asuntoEmail = document.querySelector('#asunto');

    // console.log(asuntoEmail)

    const mensaje = document.querySelector('#mensaje');

    // console.log(mensaje);

    const destinatario = document.querySelector('#destinatario');

    // console.log(destinatario);

    const formulario = document.querySelector('#formulario');

    // console.log(formulario)

    const btnSubmit = document.querySelector('#formulario button[type="submit"]');

    const btnReset = document.querySelector('#formulario button[type="reset"]');

    const spinner = document.querySelector('#spinner');


    //Registrar un Evento

    //Si pones al validar() llamas a la funcion
    inputEmail.addEventListener('input', validar);

    asuntoEmail.addEventListener('input', validar);

    destinatario.addEventListener('input', validar);

    mensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    //Reset Form

    btnReset.addEventListener('click', function (e) {
        //Quitamos la funcion del Reset

        e.preventDefault();

        resetFormulario();

    });

    function enviarEmail(e) {
        e.preventDefault();

        console.log('Enviando');

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {

            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear una alerta

            const alertaExito = document.createElement('P');

            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center',
                'rounded-lg','mt-10','font-bold','text-sm','uppercase');

            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(function () {
                alertaExito.remove();
            },3000)


        },3000)

    }

    //.trim() elimina los espacios en blancos

    function validar(e) {

        // console.log(e.target.id);

        if (e.target.value.trim() === "") {

            // console.log('Esta vacio');

            if(e.target.id !== 'destinatario'){

                mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);

                email[e.target.name] = '';

                comprobarEmail();
            }
            return;

        }

        if ((e.target.id === 'email' || e.target.id === 'destinatario') && !validarEmail(e.target.value)) {

            mostrarAlerta('El EMAIL NO ES VALIDO', e.target.parentElement);

            email[e.target.name] = '';

            comprobarEmail();

            return;
        }


        limpiarAlerta(e.target.parentElement);


        //Asignar los valores

        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de Email

        comprobarEmail();


    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        //Generar alerta en HTML

        const error = document.createElement('p');

        error.textContent = mensaje;

        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error al formulario

        referencia.appendChild(error);


    };

    function limpiarAlerta(referencia) {

        const alerta = referencia.querySelector('.bg-red-600');

        if (alerta) {

            alerta.remove();
        }

    };

    function validarEmail(email) {

        //Expresion Regular
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        const resultado = regex.test(email);

        return resultado;

    };

    //Boton Enviar

    function  comprobarEmail() {

        if (Object.values(email).includes('')){

            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true  ;
            return;

        } else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false  ;
        }
    };

    //Resetear Formulario

    function  resetFormulario(){
        //Reiniciar el Objeto
        email.email = '';
        email.asunto = '';
        email.destinatario= '';
        email.mensaje = '';

        formulario.reset();

        //Llamamos la funcion
        comprobarEmail();
    }



});

//Practicarlo

