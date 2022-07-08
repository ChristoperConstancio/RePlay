
// select the elements in DOM
const btnShowMenu = document.querySelector('#btnShow');
const divMenu = document.querySelector('#mobile-menu');
let currentSlideId = 1;
const sliderElement = document.getElementById('slider');
const totalSlides = sliderElement.childElementCount;
const inputNav = document.querySelector('#searchBar');
const iconSearch = document.querySelector('#iconSearch');

inputNav.addEventListener('click', ()  => {
    iconSearch.classList.toggle('item-white');
});


btnShowMenu.addEventListener('click', () => {
    divMenu.classList.toggle('hidden');
});

function next() {
    if(totalSlides > currentSlideId){
        currentSlideId++
        showSlide();
        console.log('adentro del if siguiente')
    }
}

function prev() {
    if(currentSlideId > 1 ){
        currentSlideId--;
        showSlide();
    }
}

function showSlide() {
    console.log('mostrando slides');
    const slides = document.getElementById('slider').getElementsByTagName('li');
    for (let index = 0; index < totalSlides; index++) {
    console.log('mostrando slides entro al ciclo');

        const element = slides[index];
        if(currentSlideId === index+1){
            element.classList.remove('hidden');
        }else{
            element.classList.add('hidden');

        }
        
    }
}