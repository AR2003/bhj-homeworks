function launchCounting() {
	if (Number(document.getElementById("timer").textContent) == 0) {
		clearInterval(timerId);
		document.getElementById("timer").textContent == "59"
		alert("Вы победили в конкурсе")
	} else {
		document.getElementById("timer").textContent = String(Number(document.getElementById("timer").textContent) - 1);
	}
}

let timerId = setInterval(launchCounting,1000)



function counterFormat(h,m,s) {
	counterFormatted = "";
	if (String(h).length < 2) {
		counterFormatted = "0" + String(h);		
	} else {
		counterFormatted = String(h);
	}

	if (String(m).length < 2) {
		counterFormatted += ":" + "0" + String(m);		
	} else {
		counterFormatted += ":"  + String(m);
	}

	if (String(s).length < 2) {
		counterFormatted += ":" + "0" + String(s);		
	} else {
		counterFormatted += ":"  + String(s);
	}
     
    document.getElementById("timer").textContent = counterFormatted;
}


function launchCountingFormat() {
	minusCount = document.getElementById("timer").textContent;
	h = Number(minusCount.substr(0,2));
	m = Number(minusCount.substr(3,2));
	s = Number(minusCount.substr(6,2));
	while (!((h == 0) && (m == 0) && (s == 0))) {
		counterFormat(h,m,s);
		if ((m == 0) && (s == 0))  {
			h -= 1;
			m = 60;
			s = 59;			
			continue;			 
		} 

		if ( s == 0) {
			m -= 1;
			s = 59;
			continue;
		}
		s -= 1;
    }
    
    counterFormat(h,m,s);
    alert("Вы победили в конкурсе")	
    clearInterval(timerId);
}


let timerId = setInterval(launchCountingFormat,1000)