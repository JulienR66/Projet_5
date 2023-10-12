const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"id": 0
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"id": 1
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"id": 2
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"id": 3
	}
]


let flecheGauche = document.getElementById("flecheGauche")
let flecheDroite = document.getElementById("flecheDroite")
let indiceActuel = 0


flecheGauche.addEventListener('click', () => {
	mettreAJourCarousel('gauche');
});

flecheDroite.addEventListener('click', () => {
	mettreAJourCarousel('droite');
});


function mettreAJourCarousel(direction) {

	if (direction === 'droite') {
		indiceActuel = (indiceActuel + 1) % slides.length;
	}else if (direction === 'gauche') {
		indiceActuel = (indiceActuel - 1 + slides.length) % slides.length;
	}

	if (indiceActuel < 0) {
		indiceActuel = slides.length - 1;
	}

	const imageCarousel = document.querySelector(".banner-img");
	imageCarousel.src = slides[indiceActuel].image;

	const tagLine = document.querySelector("#banner p")
	tagLine.innerHTML = slides[indiceActuel].tagLine

	const dots = document.querySelectorAll(".dot");
	for (let i = 0; i < dots.length; i++) {

		if (i === indiceActuel) {
			dots[i].classList.add("dot_selected");
		} else {
			dots[i].classList.remove("dot_selected");
		}
	}
	
	console.log("après", indiceActuel)

}