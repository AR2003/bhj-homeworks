function changeSize() {
	if (this.width == 200) {
		this.width = 100
	}   else {
		this.width = 200
	}
	document.getElementById("clicker__counter").textContent = String(Number(document.getElementById("clicker__counter").textContent) + 1);
	d = new Date();
	end_time = d.getTime();
	clicker__speed = ((Number(document.getElementById("clicker__counter").textContent) - start_count) / (end_time-start_time) * 1000).toFixed(2); 
	document.getElementById("clicker__speed").textContent = String(clicker__speed);
	start_count = Number(document.getElementById("clicker__counter").textContent);
	start_time = end_time;
}

function clicksCount(currentClicks) {
	clicker_start = currentClicks;
	Count = 0;
}

const cookieImage= document.getElementById("cookie");
d = new Date();
start_time = d.getTime();
start_count = Number(document.getElementById("clicker__counter").textContent);
cookieImage.onclick = changeSize;


//while () {
//	if ( (d.gettime() - start) >= 1000 ) {
//		document.getElementById("clicker__counter").textContent
//	}
//}
//setInterval(clicksCount,1000,Number(document.getElementById("clicker__counter").textContent))