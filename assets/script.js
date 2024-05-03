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

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	console.log("Clic sur la flèche de gauche !");
	changeSlide(-1);
})

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
	console.log("Clic sur la flèche de droite !");
	changeSlide(+1);
})

let divDots = document.querySelector(".dots");
// boucle pour ajouter une div par slide
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	divDots.appendChild(dot);
}

// Je récupère chaque div avec la classe dot
let dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

let banner = document.querySelector(".banner-img");
let textBanner = document.querySelector("#banner p");

let number = 0;
function changeSlide(sens) {
	number = number + sens;

	// si l'élément du tableau est supérieur à son dernier élément
	if (number > slides.length -1) {
		number = 0;
	} else if (number < 0) {
		// l'élément du tableau affiché doit être le dernier
		number = slides.length -1;
	}

	banner.src = "./assets/images/slideshow/" + slides[number].image;
	textBanner.innerHTML = slides[number].tagLine;
	changeDots()
}

function changeDots() {
	// pour chaque noeud dans la div dots
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[number].classList.add("dot_selected");
}
