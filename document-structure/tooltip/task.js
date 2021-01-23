function tipProcess(event) {
	
    event.preventDefault();
    const currentActive = document.querySelector(".tooltip_active");
    if (currentActive != null) {
        currentActive.classList.remove("tooltip_active");
        if (this.nextElementSibling == currentActive) {
            return false;
        }
    }


    let toInsert = document.createElement('div');
    toInsert.className = "tooltip tooltip_active";  
    toInsert.innerHTML = this.title;    
    let coord = this.getBoundingClientRect()
    toInsert.style = `left: ${coord.left+"px"}; top: ${coord.bottom+"px"}`;	
    this.after(toInsert) 
    if (this.dataset.position == "right") {
    	toInsert.style = `left: ${coord.right+"px"}; top: ${"0"+"px"}`;	
    } else if (this.dataset.position == "left") {
    	toInsert.style = `left: ${coord.left-toInsert.offsetWidth+"px"}; top: ${coord.top+"px"}`;
    } else if (this.dataset.position == "top") {
    	toInsert.style = `left: ${coord.left+"px"}; top: ${coord.top-toInsert.offsetHeight+"px"}`;
    }    
	return false
}


const elementsForTips = document.querySelectorAll(".has-tooltip")
for (let i = 0; i < elementsForTips.length; i++) {
	elementsForTips[i].addEventListener("click", tipProcess)
}