"use strict";



const resultado = document.querySelector('#resGames');
addEventListener('DOMContentLoaded', cargarImagenes);

const divMenu = document.querySelector('#mobile-menu');
const btnShowMenu = document.querySelector('#btnShow');

function cargarImagenes() {
    const termino = 'videojuegos';

    const key = '28272022-46968378f49b3eecf3f2c2a9b';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=20&page=1`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            showImages(resultado.hits);
        })
        .catch(error => console.log(error))
}
function showImages(imagenes) {
    // iterar sobre el arreglo de imagenes y construir HTML
    
    imagenes.forEach((imagen, index) => {
        const { previewURL } = imagen;


        resultado.innerHTML += `  
            <a href = "article.html"  class="link">             
                <div class="  w-full h-32 lg:h-52 game card bg-gray-900 rounded-xl" >     
                    <img id="${index}" src = "${previewURL}" class="fill-white img-card object-cover h-32 lg:h-52 w-full rounded-xl">
                </div>
            </a>
        `;
        



    });
}

if(btnShowMenu){
    btnShowMenu.addEventListener('click', () => {
        divMenu.classList.toggle('hidden');
  });
}


if(resultado){
    resultado.addEventListener('click', e => {
        localStorage.setItem('id',e.target.id);
        localStorage.setItem('src', e.target.src)
    })
}





