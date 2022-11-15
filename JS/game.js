// import showAlert from "login.js";


addEventListener('DOMContentLoaded', () => {
    const uri =  "../data.json";

    
    fetch(uri)
        .then(response => response.json())
        .then(data => showArticle(data))
        .catch( console.log("Data error"))
})

const idLocal = localStorage.getItem('id');
const imgLocal = localStorage.getItem('src');
const imgGame = document.createElement('img');
const textDescription = document.querySelector('#textDescription');
const divImages = document.querySelector('#images');
const platformsTxt = document.querySelector("#platforms");
const beforeTxt = document.querySelector('#plat');
const nameTxt = document.querySelector('#nGame');


const showArticle = data => {
    data.forEach(element => {
        const { id, name, description, platforms} = element;
        
        if(idLocal == id){
            nameTxt.textContent = `${name}`;
            textDescription.textContent = `${description} `;
            imgGame.src = imgLocal;
            imgGame.classList.add("rounded-md");
            imgGame.classList.add("sm:w-72");
            imgGame.classList.add("sm:h-44");

            divImages.appendChild(imgGame);
            platformsTxt.textContent = platforms;
           

        }
    });
    
    
}