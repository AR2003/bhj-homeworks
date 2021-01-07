function closeWindow() {
	this.closest(".modal").classList.remove("modal_active")

//	document.getElementById("modal_main").classList.remove("modal_active")
//	document.getElementById("modal_success").classList.remove("modal_active")
}

function changeWindow() {
	document.getElementById("modal_main").classList.remove("modal_active")
	document.getElementById("modal_success").classList.add("modal_active")
}


document.getElementById("modal_main").classList.add("modal_active");
closeElement = document.getElementsByClassName("modal__close_times");
for ( i = 0; i < closeElement.length; i++) {
 	closeElement[i].onclick = closeWindow;
 } 

document.getElementsByClassName("btn_danger").item(0).onclick = changeWindow
