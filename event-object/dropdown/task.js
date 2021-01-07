function dropClick() {	
	this.closest("div").getElementsByClassName("dropdown__value")[0].textContent = this.textContent	
	return false
}


selectedItem = document.getElementsByClassName("dropdown")
selectedItem[0].onclick = function() {
	if (this.getElementsByClassName("dropdown__list")[0].classList.contains("dropdown__list_active")) {
		this.getElementsByClassName("dropdown__list")[0].classList.remove("dropdown__list_active")
	} else {
		this.getElementsByClassName("dropdown__list")[0].classList.add("dropdown__list_active")
	}
	return false
}

allMenu = document.getElementsByClassName("dropdown__item") 
for (i = 0; i < allMenu.length; i++) {
	allMenu[i].onclick = dropClick
}