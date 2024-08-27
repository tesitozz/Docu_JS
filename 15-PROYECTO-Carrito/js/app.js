// Declaramos Variables

const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector('#lista-cursos');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarrito = document.querySelector('#vaciar-carrito');

//Array vacio porque se estar agregando los datos

let articuloCarrito = [];


cargarEventsListeners();

function cargarEventsListeners() {

    //Cuando agregas un curso presienonando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito

    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito

    vaciarCarrito.addEventListener('click', () => {

        articuloCarrito = []; // reseteamos el arreglo

        limpiarHTML(); //Eliminamos todo el HTML

    });

}

// Funciones

function agregarCurso(e) {

    //Prevenimos la accion default
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {

        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }

};

//Elimina un curso del carrito

function eliminarCurso(e) {

    if (e.target.classList.contains('borrar-curso')) {

        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articuloCarrito por el data-id
        articuloCarrito = articuloCarrito.filter(curso => curso.id !== cursoId);


        carritoHTML(); //Iterar sobre el carrito y mostrar el HTML

    }
}

// Lee el contenido de HTML quie le dimos click y extrae la informacion del curso

function leerDatosCurso(curso) {

    // console.log(curso);

    //Crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    //Revisa si un elemento ya existe en el carrito

    const existe = articuloCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        //Actualizamos la cantidad
        const cursos = articuloCarrito.map(curso => {
            if (curso.id === infoCurso.id) {

                curso.cantidad++;
                return curso; //Retorna el objeto actualizado

            } else {

                return curso; //Retorna los objetos que no son duplicados

            }
        });


        articuloCarrito = [...cursos];
    } else {
        //Agrega elementos al arreglo de carrito

        articuloCarrito = [...articuloCarrito, infoCurso];

    }


    console.log(articuloCarrito);

    carritoHTML();


};

//Muestra el carrito de compra en el HTML

function carritoHTML() {

    //Limpiar el HTML

    limpiarHTML();


    //Recorre el carrito y ggenera el HTML

    articuloCarrito.forEach(curso => {

        const { imagen, titulo, precio, cantidad, id } = curso;

        console.log(curso);
        const row = document.createElement('tr');

        row.innerHTML = `

            <td><img src="${imagen}" width = "100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
             <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a>
            </td>

        `;

        //Agregar el HTML del carrito en el tbody

        contenedorCarrito.appendChild(row);

    });

}

//Elimina los cursos del tbody

function limpiarHTML() {

    //Forma Lenta

    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

    }

}

