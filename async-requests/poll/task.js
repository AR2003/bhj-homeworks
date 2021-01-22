function addButtonAnswer(buttonName) {
    buttonList = document.getElementById("poll__answers") 
	const insertText = `<button class="poll__answer">
            				  ${buttonName}
           				 </button>   `

	buttonList.insertAdjacentHTML("beforeEnd",insertText);
	const allButtons = document.getElementsByClassName("poll__answer");
	allButtons[allButtons.length - 1].addEventListener("click", function () {alert("Спасибо, ваш голос засчитан!")} );

}



let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function () {
		if(xhr.readyState === 4) {			
			questionObj = JSON.parse(xhr.responseText).data;
			question = document.getElementById("poll__title");
			question.textContent = questionObj.title;
			for (let i = 0; i < questionObj.answers.length; i++) {
				addButtonAnswer(questionObj.answers[i]);
			} 
					
			
		}
		
}



