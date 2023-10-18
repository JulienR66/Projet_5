const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	}
]


const flecheGauche = document.getElementById("flecheGauche")
const flecheDroite = document.getElementById("flecheDroite")
const imageCarouselActuelle = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");
const tagLine = document.querySelector("#banner p")
let indiceActuel = 0

flecheGauche.addEventListener('click', () => {
	mettreAJourCarousel('gauche');
});

flecheDroite.addEventListener('click', () => {
	mettreAJourCarousel('droite');
});

function mettreAJourCarousel(direction) {

	if (direction === 'droite') {
		indiceActuel = indiceActuel + 1;
		if (indiceActuel > slides.length - 1) {
			indiceActuel = 0;
		}
	}else if (direction === 'gauche') {
		indiceActuel = indiceActuel - 1;
		if (indiceActuel < 0) {
			indiceActuel = slides.length - 1;
		}
	}
	
	imageCarouselActuelle.src = slides[indiceActuel].image;	
	tagLine.innerHTML = slides[indiceActuel].tagLine

	for (let i = 0; i < dots.length; i++) {

		if (i === indiceActuel) {
			dots[i].classList.add("dot_selected");
		} else {
			dots[i].classList.remove("dot_selected");
		}
	}
}