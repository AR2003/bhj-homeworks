
function checkTarget() {
	if (this.className.includes( 'hole_has-mole' )) {
		dead = Number(document.getElementById("dead").textContent) + 1;
		document.getElementById("dead").textContent = String(dead);	
		if (dead == 10) {					 
			alert("Победа!");
			document.getElementById("dead").textContent = 0;
			document.getElementById("lost").textContent = 0;
		}  
		
	} else {
		lost = Number(document.getElementById("lost").textContent) + 1;
		document.getElementById("lost").textContent = String(lost);	
		if (lost == 5) {					 
			alert("Вы проиграли!");
			document.getElementById("dead").textContent = 0;
			document.getElementById("lost").textContent = 0;
		}
	}
}


for (i = 1; i <= 9; i++) {
	const element = document.getElementById("hole" + String(i));
	element.onclick = checkTarget;
}


