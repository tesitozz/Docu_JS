
//Constructores

function Seguro(marca, year, tipoSeguro) {

    this.marca = marca;
    this.year = year;
    this.tipoSeguro = tipoSeguro;

};

//Realiza la cotizacion con los datos

Seguro.prototype.cotizarSeguro = function () {
    /*
        si es la opcion 1 
        es americano = 1.15

        si es la opcion 2 
        es asiatico = 1.05

        si es la opcion 3
        es europeo = 1.35

    */

    let cantidad;

    const base = 2000;


    switch (this.marca) {

        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;

        default:
            break;
    }

    //Leer el año

    const diferencia = new Date().getFullYear() - this.year;

    // Cada año qu la diferencia es mayor, el costo va a reducirse un 3%

    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*

    si el seguro s basico se multipica por un 30% mas
    si el seguro s completo se multipica por un 30% mas


    */

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad;

}

//Visualizacion Grafica - Interfaz de Usuario
function UI() { }


UI.prototype.llenarOpciones = () => {

    const max = new Date().getFullYear(),
        min = max - 20;

    //Acceder al Year en el formulario
    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        selectYear.appendChild(option);
    }
};

UI.prototype.mostrarMensaje = function (mensaje, tipo) {



    const div = document.createElement('div');

    if (tipo === 'error') {

        div.classList.add('mensaje', 'error')

    } else {

        div.classList.add('mensaje', 'correcto')

    }

    div.classList.add('mensaje', 'mt-10')

    div.textContent = mensaje;

    //Insertar en el HTML

    const formulario = document.querySelector('#cotizar-seguro');

    formulario.insertBefore(div, document.querySelector('#resultado'));


    setTimeout(() => {

        div.remove();

    }, 2000)

};

UI.prototype.mostrarResultado = (total, seguro) => {


    const { marca, year, tipoSeguro } = seguro;

    let textoMarca;

    switch(marca){

        case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;
        case '3':
            textoMarca = 'Europeo'
            break
        default:
            break;
    }




    //Crear el resultado

    const div = document.createElement('div');
    div.classList.add('mt-10');


    div.innerHTML = `

        <p class="header">Tu Resumen</p>
        <p class="font-bold">Total: <span class="font-normal"> $ ${total}</span> </p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span> </p>
        <p class="font-bold">Año: <span class="font-normal"> ${year}</span> </p>
        <p class="font-bold">Tipo de Seguro: <span class="font-normal"> ${tipoSeguro}</span> </p>

    `;

    const resultadoDiv = document.querySelector('#resultado');

    //Mostrar el Spinner

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';


    setTimeout(() => {

        spinner.style.display = 'none'; //Se borra el spinner pero se muestra el resultado

        resultadoDiv.appendChild(div);


    }, 3000)

}


//Instanciar UI

const ui = new UI();
// console.log(ui)


//Llena las opciones de los años
document.addEventListener('DOMContentLoaded', () => {

    ui.llenarOpciones(); //Llena el select con los años


});

EventListener();
function EventListener() {

    const formulario = document.querySelector('#cotizar-seguro');

    formulario.addEventListener('submit', cotizarSeguro);


}

//Submit - e.preventDefault para qutiar su funcion
function cotizarSeguro(e) {

    e.preventDefault();

    //Leer la marca seleccionada

    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado

    const year = document.querySelector('#year').value;

    //Leer el tipo de Cobertura

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca === '' || year === '' || tipo === '') {

        ui.mostrarMensaje('TODOS LOS CAMPOS SON OBLIGATORIOS', 'error');

        return;

    }

    ui.mostrarMensaje('Cotizando...', 'exito');

    //Ocultar las cotizacions previas

    const resultados = document.querySelector('#resultado div');

    if (resultados != null) {
        resultados.remove();
    }


    //Instanciar el seguro

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();


    //Utilizar el prototype que va a cotizar

    ui.mostrarResultado(total, seguro);

}

