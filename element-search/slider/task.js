function changeSlide(slideNumber) {

	allSliders = document.getElementsByClassName("slider__item")
	for ( i = 0; i < allSliders.length; i++) {
		allSliders[i].classList.remove("slider__item_active")
 	} 	

 	allDots = document.getElementsByClassName("slider__dot")
	for ( i = 0; i < allDots.length; i++) {
		allDots[i].classList.remove("slider__dot_active")
 	}

 	allSliders[slideNumber].classList.add("slider__item_active")
 	allDots[slideNumber].classList.add("slider__dot_active")
}




function arrowProcess() {
//	функция отработки стрелок
	if (this.classList.contains("slider__arrow_prev")) {		
		counter = -1
	} else {
        counter = 1 
	}  

    if ((currentSlideNumber == 0) && (counter == -1)) {
		currentSlideNumber = slideNumbers
	} else if ((currentSlideNumber == slideNumbers) && (counter == 1)) {
		currentSlideNumber = 0
	} else {
		currentSlideNumber = currentSlideNumber + counter 
	}
    changeSlide(currentSlideNumber)
}


currentSlideNumber = 0
allSliders = document.getElementsByClassName("slider__item")
slideNumbers = allSliders.length-1 

previous = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0]
next = document.getElementsByClassName("slider__arrow slider__arrow_next")[0]
previous.onclick = arrowProcess
next.onclick = arrowProcess

allDots = document.getElementsByClassName("slider__dot")

for ( i = 0; i < allDots.length; i++) {
 	allDots[i].onclick = function () {
 		dots = document.getElementsByClassName("slider__dot")
 		for ( i = 0; i < dots.length; i++) {
 			if (dots[i] == this) {
 				currentSlideNumber = i
 				changeSlide(currentSlideNumber)
 				return
 			}
 		}
 	}
 } 