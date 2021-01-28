function saveText() {
	localStorage.removeItem('editorText');
	localStorage.editorText = this.value;
	return false
}

let editorObj= document.getElementById("editor");
editorObj.addEventListener("input", saveText);
editorObj.addEventListener("change", saveText);

let clearAll= document.getElementById("clear__button");
clearAll.addEventListener("click", function () {editorObj.value = "" ; localStorage.removeItem('editorText') });

if (localStorage.editorText != undefined) {
	editorObj.value = localStorage.editorText;	
}

