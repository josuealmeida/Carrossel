const slide = document.querySelectorAll('.slide')
const prev = document.querySelector('.bx-chevron-left')
const next = document.querySelector('.bx-chevron-right')
const navigation = document.querySelector('.navigation')

let atual = 1
let position = 0



/* Ir para o próximo slide	
------------------------------------------- */
function nextSlide() {
	atual++
	position = position - 100

	// Limite
	if (atual > slide.length) {
		atual = 1
		position = 0

		translateSlide()
	} else{
		translateSlide()
	}
}

next.onclick = () =>{
	nextSlide()
	clearInterval(auto)
}



/* Ir para o slide anterior
------------------------------------------- */
function prevSlide() {
	atual--
	position = position + 100

	// Limite
	if (atual <= 1) {
		atual = 1
		position = 0

		translateSlide()
	} else{
		translateSlide()
	}
}

prev.onclick = () =>{
	prevSlide()
	clearInterval(auto)
}



/* Alterar o translate do slide
------------------------------------------- */
function translateSlide(){
	slide.forEach(image =>{
		image.style.transform = `translateX(${position}%)`
	})
}



/* Slide automático
------------------------------------------- */
const auto = setInterval(function(){
	nextSlide()
}, 2500);