
//Detener la Ejecucion de un if con FUNCIONES

const autenticado = true;

if (autenticado) {
    console.log('Esta autenticado')
}

const puntaje = 500;

function revisarPuntaje() {

    if (puntaje > 400) {

        console.log('Felicidades')
        return;

    }

    if (puntaje > 300) {

        console.log('Felicidades excelente')
        return;

    }


}

revisarPuntaje();
