function changeSlide(prevSlideNumber,currentSlideNumber) {

	// allSliders = document.getElementsByClassName("slider__item")
	// for ( i = 0; i < allSliders.length; i++) {
	// 	allSliders[i].classList.remove("slider__item_active")
 // 	} 	

 // 	allDots = document.getElementsByClassName("slider__dot")
	// for ( i = 0; i < allDots.length; i++) {
	// 	allDots[i].classList.remove("slider__dot_active")
 // 	}

    allSliders = document.getElementsByClassName("slider__item")
    allDots = document.getElementsByClassName("slider__dot")

    allSliders[prevSlideNumber].classList.remove("slider__item_active")
 	allDots[prevSlideNumber].classList.remove("slider__dot_active")

 	allSliders[currentSlideNumber].classList.add("slider__item_active")
 	allDots[currentSlideNumber].classList.add("slider__dot_active")
}




function arrowProcess() {
//	функция отработки стрелок
   // Array.from(document.getElementsByClassName("slider__item"))
    slidersArray = Array.from(document.getElementsByClassName("slider__item"));
    prevSlideIndex = slidersArray.findIndex(item => item.classList.contains("slider__item_active"));

    let counter = 0
	if (this.classList.contains("slider__arrow_prev")) {		
		counter = -1
	} else if (this.classList.contains("slider__arrow_next")) {
        counter = 1 
	}  

    if ((prevSlideIndex == 0) && (counter == -1)) {
		currentSlideIndex = slidersArray.length - 1
	} else if ((prevSlideIndex == (slidersArray.length - 1)  ) && (counter == 1)) {
		currentSlideIndex = 0
	} else {
		currentSlideIndex = prevSlideIndex + counter 
	}
    changeSlide(prevSlideIndex,currentSlideIndex)
}


// currentSlideNumber = 0
// allSliders = document.getElementsByClassName("slider__item")
// slideNumbers = allSliders.length-1 

changeSlide(0,0)
previous = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0]
next = document.getElementsByClassName("slider__arrow slider__arrow_next")[0]
previous.onclick = arrowProcess
next.onclick = arrowProcess

allDots = document.getElementsByClassName("slider__dot")


for ( i = 0; i < allDots.length; i++) {
 	allDots[i].onclick = function () {
 		prevSlideIndex = Array.from(allDots).findIndex(item => item .classList.contains("slider__dot_active"))
 		currentSlideIndex = Array.from(allDots).findIndex(item => item == this)
 		changeSlide(prevSlideIndex,currentSlideIndex)
 	}
 } 


// for ( i = 0; i < allDots.length; i++) {
//  	allDots[i].onclick = function () {
//  		dots = document.getElementsByClassName("slider__dot")
//  		for ( i = 0; i < dots.length; i++) {
//  			if (dots[i] == this) {
//  				currentSlideNumber = i
//  				changeSlide(currentSlideNumber)
//  				return
//  			}
//  		}
//  	}
//  } 