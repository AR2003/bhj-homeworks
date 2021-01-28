function sendForm(event) {
	let formData = new FormData(document.forms.signin__form);
	const inputData = document.getElementsByClassName("control");
//	formData.append('userId',inputData[0].value);
//	formData.append('password',inputData[1].value);
	


	let xhr = new XMLHttpRequest();


	xhr.upload.onloadstart = function() {
			alert( 'Загрузка запустилась');
		}	
		xhr.upload.onprogress = function() {
			alert( 'Загрузка в процессе');
		}
		xhr.upload.onload = function() {
			alert( 'Данные полностью загружены на сервер!' );
		}
		xhr.upload.onerror = function() {
			alert( 'Произошла ошибка при загрузке данных на сервер!' );
		}


	xhr.onreadystatechange = function () {
		if(xhr.readyState === 0) {
			console.log("стадия 0" + xhr.responseText)
		}	
		if(xhr.readyState === 1) {
			console.log("стадия 1" + xhr.responseText)
		}
		if(xhr.readyState === 2) {
			console.log("стадия 2" + xhr.responseText)
		}
		if(xhr.readyState === 3) {
			console.log("стадия 3" + xhr.responseText)
		}

		
		if(xhr.readyState === 4) {
			if (JSON.parse(xhr.responseText).success) {
				userWelcome = document.getElementById("welcome");
				userName = document.getElementById("user_id");
				userName.textContent = localStorage.userId;
				userWelcome.classList.add("welcome_active");
				localStorage.userId = inputData[0].value;
				localStorage.password = inputData[1].value;
			} else {
				alert("Неверный логин/пароль");
			}			
		};
	}


	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php", true);
    xhr.send(formData);
    return false;
    event.preventDefault()
}


activateForm = document.querySelector(".signin");
activateForm.classList.add("signin_active");


inputData = document.getElementsByClassName("control");
if (localStorage.userId != undefined) {
	userWelcome = document.getElementById("welcome");
	userName = document.getElementById("user_id");
	userName.textContent = localStorage.userId;
	userWelcome.classList.add("welcome_active");
	inputData[0].value = localStorage.userId;	
}

if (localStorage.password != undefined) {
	inputData[1].value = localStorage.password;	
}

sendButton = document.getElementById("signin__btn");
sendButton.addEventListener("click",sendForm);



