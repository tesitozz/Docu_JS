
//Variables
const formulario = document.querySelector('#formulario');
// console.log(formulario);
const listar = document.querySelector('#lista-tweets');
// console.log(listar);

let tweets = [];

//EVENT LISTENERS
eventListeners();
function eventListeners() {

    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento este listo

    document.addEventListener('DOMContentLoaded', () => {

        tweets = JSON.parse(localStorage.getItem('tweets')) ||  [];

        console.log(tweets);

        crearHTML();

    });

}

//FUNCIONES

function agregarTweet(e) {
    e.preventDefault();

    //Text area donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;

    //VALIDACION


    if(tweet === ''){

        mostrarMensaje('Un mensaje no puede ir vacio')

        return; //Se evita que se ejecuten mas lineas de codigo

    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de tweets

    tweets = [...tweets, tweetObj];


    //Una vez agregado vammos a crear el HTMLL

    crearHTML();

    //Reiniciar el formulario

    formulario.reset();

}

//Mostrar mensaje de error
function mostrarMensaje(error){

    const mensajeError =  document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el ccontenid

    const contenido = document.querySelector('#contenido');

    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3seg
    setTimeout(function(){
        mensajeError.remove();
    },3000);

}

//Muestra un llistado de los tweets

function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach(tweet => {

            //Agregar un boton de eliminar

            const btnEliminar = document.createElement('a');

            btnEliminar.classList.add('borrar-tweet');

            btnEliminar.innerText = 'X';


            //Añadir la funcion de eliminar

            btnEliminar.onclick = () => {
                eliminarTweet(tweet.id);
            }

            //Crear el HTML

            const li = document.createElement('li');

            //Añadir el texto

            li.innerText = tweet.tweet;

            //Asignar el boton

            li.appendChild(btnEliminar);

            //Insertar en el HTML

            listar.appendChild(li);

        });

    }

    sincronizarStorage();


}

//Agrega los tweets al localStroage

function sincronizarStorage(){

    //Cuando el usuario agrega un nuevo tweet
    localStorage.setItem('tweets',JSON.stringify(tweets));



}
// Elimina un tweet

function eliminarTweet(id){

    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();

}


//Limpiar el HTML

function limpiarHTML(){

    while(listar.firstChild) {

        listar.removeChild(listar.firstChild);

    }
}




