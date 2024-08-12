
const playlist = {

    cancion: '',

    reproducir: musica => console.log(`Reproduciendo PlayList ${musica}`)
    ,
    pausar: () => console.log(`Pausando la Musica`)
    ,
    borrando: musica => console.log(`Borrando la Musica ${musica}`),

    set NuevaCancion(cancion) {

        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)

    },

    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

}

playlist.NuevaCancion = 'Lola la lola';
playlist.obtenerCancion;


playlist.reproducir('David');
playlist.pausar()
playlist.borrando('Abba');

