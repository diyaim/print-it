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


// récupération des élémenets du DOM
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const bannerimg = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

let dotlist;
let currentslide = 0

// ajout d'un eventlistener sur les fléches
arrowleft.addEventListener("click", () => {
	currentslide--;
	updatecarousel();
	console.log("vous avez cliquer sur la fléche gauche");
});

arrowright.addEventListener("click", () => {
	currentslide++;
	updatecarousel();
	console.log("vous avez cliquer sur la fléche droite");
})

// génération des points
for( j=0; j< slides.length; j++){
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (j===0) dot.classList.add("dot_selected");
	dots.appendChild(dot);
}



function updatecarousel() {
	// défilement infini sur le carousel
	if (currentslide < 0) {
		currentslide = slides.length - 1;
	} else if (currentslide >= slides.length ) {
		currentslide = 0;
	}
	bannerimg.src = `./assets/images/slideshow/${slides[currentslide].image}`; // changer l'image
	text.innerHTML = slides[currentslide].tagLine; //changer le texte

	dotlist= document.querySelectorAll(".dot");
	
	// changer le point actif	
	for (let i = 0; i < dotlist.length; i++) {
		dotlist[i].classList.remove("dot_selected");
	}
	dotlist[currentslide].classList.add("dot_selected");

}



