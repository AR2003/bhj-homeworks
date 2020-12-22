
function linkReaction() {
	// закрытие других активных меню, если таковые есть
	activeMenu = document.getElementsByClassName("menu_active")
	for ( i = 0; i < activeMenu.length; i++) {
		 activeMenu[i].classList.remove("menu_active");
    }  
	
	// открытие меню
	if (this.closest("li").querySelector('ul') != null) {
		this.closest("li").querySelector('ul').classList.add("menu_active")
		return false
	} 
}


allLinksElements = document.getElementsByClassName("menu__link");
for ( i = 0; i < allLinksElements.length; i++) {
 	allLinksElements[i].onclick = linkReaction;
 } 