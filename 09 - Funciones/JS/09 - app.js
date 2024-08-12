
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion con el id ${id}...`)
    },
    pausar: function () {
        console.log('Pausando')
    }


}

reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar = function (id) {

    console.log(`Borrand cancion : ${id}`)
}

reproductor.borrar(12);


const playlist = {

    reproducir: function (musica = "No se Encontro") {
        console.log(`Reproduciendo PlayList ${musica}`)
    },
    pausar: function (musica = "No se Encontro") {
        console.log(`Pausando la Musica ${musica}`)
    },
    borrando: function (musica = "No se Encontro") {
        console.log(`Borrando la Musica ${musica}`)
    }
}

playlist.reproducir('David'); 
playlist.pausar('Queen');
playlist.borrando('Abba')