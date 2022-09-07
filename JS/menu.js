
const resultado = document.querySelector('#resultado');

addEventListener('DOMContentLoaded', cargarImagenes);

function cargarImagenes() {
    const termino = 'videojuegos';

    const key = '28272022-46968378f49b3eecf3f2c2a9b';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=12&page=1`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarImagenes(resultado.hits);
        })
}
function mostrarImagenes(imagenes) {

    // iterar sobre el arreglo de imagenes y construir HTML
    imagenes.forEach(imagen => {
        const { previewURL } = imagen;
        resultado.innerHTML += ` 
            <div class=" relative sm:w-1/6 md:w-1/4 lg:w-4/6 game card" >     
                <img src = "${previewURL}" class="img-card object-cover h-44 w-full">
            </div>
                `;
    });
}