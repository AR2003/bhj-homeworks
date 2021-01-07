

function changeMotto() {
	currentActive = document.getElementsByClassName("rotator__case_active")[0]
	allMotto = Array.from(document.getElementsByClassName("rotator__case"))
	currentIndex = allMotto.indexOf(currentActive)
	if  ((currentIndex+1) == allMotto.length) {
		nextIndex = 0
	} else {
		nextIndex = currentIndex + 1
	}
	allMotto[currentIndex].classList.remove("rotator__case_active")
	allMotto[nextIndex].classList.add("rotator__case_active")
	allMotto[nextIndex].setAttribute("color",allMotto[nextIndex].dataset.color)
}

let timerId = setInterval(changeMotto,1000)
   // changeMotto()
   // changeMotto()
   // changeMotto()
   // changeMotto()
   // changeMotto()
   // changeMotto()
   // changeMotto()
// motto = document.getElementsByClassName("rotator__case")
// for ( i = 0; i < motto.length + 1 ; i++) {
//  	let timerId = setTimeout(changeMotto,1000,i)
//  //   changeMotto(i)
//  	if ((i+1) == motto.length) {
//  		i = 0
//  	}

//  } 