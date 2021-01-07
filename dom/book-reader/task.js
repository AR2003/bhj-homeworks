

function fontControl() {
	allFonts = Array.from(document.getElementsByClassName("font-size"))
	allFonts.forEach((item) => {item.classList.remove("font-size_active")}) 
	this.classList.add("font-size_active")
	if (this.classList.contains("font-size_big")) {
		document.getElementById("book").classList.add("book_fs-big")
		document.getElementById("book").classList.remove("book_fs-small")
	} else if (this.classList.contains("font-size_small")) {
		document.getElementById("book").classList.add("book_fs-small")
		document.getElementById("book").classList.remove("book_fs-big")
	} else {
		document.getElementById("book").classList.remove("book_fs-small")
		document.getElementById("book").classList.remove("book_fs-big")
	}
	event.preventDefault()	
}


f = document.getElementsByClassName("font-size")
for (i = 0; i < f.length; i++) {
	f[i].addEventListener("click", fontControl)	
}

c = document.getElementsByClassName("font-size")
for (i = 0; i < f.length; i++) {
	c[i].addEventListener("click", fontControl)	
}



