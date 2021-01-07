
function scrollProcess() {
	element = document.getElementsByClassName("reveal")
	for (var i = 0; i < element.length; i++) {
		// блок становится видимым при скроллинге вниз умышленно не сразу при попадании в область видимости всей страници, а ближе к середине для акцентирования внимания
		if ((element[i].getBoundingClientRect().top < (window.innerHeight / 1.5)  ) && (element[i].getBoundingClientRect().bottom  > 0))  {
			element[i].classList.add("reveal_active")
		} else {
			element[i].classList.remove("reveal_active")
		}
	}

} 


document.addEventListener("scroll", scrollProcess)