const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ajoit d'un eventlistener sur les fléches

let arrowleft = document.querySelector(".arrow_left");
arrowleft.addEventListener("click", () => {
	currentslide--;
	updatecarousel();
	console.log("vous avez cliquer sur la fléche gauche");
});


let arrowright = document.querySelector(".arrow_right");
arrowright.addEventListener("click", () => {
	currentslide++;
	updatecarousel();
	console.log("vous avez cliquer sur la fléche droite");
})

// récupération des élémenets du DOM
let bannerimg = document.querySelector(".banner-img");
let text = document.querySelector("#banner p");
let dotlist = document.querySelectorAll(".dot");

let currentslide = 0

function updatecarousel() {
	// défilement infini sur le carousel
	if (currentslide < 0) {
		currentslide = slides.length - 1;
	} else if (currentslide >= 4) {
		currentslide = 0;
	}
	bannerimg.src = `./assets/images/slideshow/${slides[currentslide].image}`; // changer l'image
	text.innerHTML = slides[currentslide].tagLine; //changer le texte

	// changer le point actif	
	for (let i = 0; i < dotlist.length; i++) {
		dotlist[i].classList.remove("dot_selected");
	}
	dotlist[currentslide].classList.add("dot_selected");

}




