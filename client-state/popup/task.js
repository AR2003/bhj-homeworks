function closeWindow() {
	document.cookie = 'statusModal=closed';
	this.closest(".modal").classList.remove("modal_active")
}

if (!document.cookie.includes('statusModal=closed')) {
	document.getElementById("subscribe-modal").classList.add("modal_active");	
}

closeElement = document.getElementsByClassName("modal__close_times");
for ( i = 0; i < closeElement.length; i++) {
 	closeElement[i].onclick = closeWindow;
 } 

