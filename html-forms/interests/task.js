function firstLevelMenuProcess(event) {
	if (this.closest("ul").classList.contains("interests") == false) {
		let submenu = this.closest("li").querySelectorAll("ul.interests input")
		for (var i = 0; i < submenu.length; i++) {
			submenu[i].checked = this.checked
		}
	}

}


const allCheckboxes = document.querySelectorAll("input")
for (i = 0; i < allCheckboxes.length; i++) {
	allCheckboxes[i].addEventListener("change", firstLevelMenuProcess) 
}