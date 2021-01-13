function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function robotAnswer() {
	let answersArray = ["Гражданин, дверь закройте!", "У нас инвертаризация. Не мешайте людям работать!", "Встаньте в очередь", "Повежливей, товарищ!", "Роботы тоже люди! Рабочий день закончился." ]
	let answerNumber =  getRandomInRange(0, answersArray.length-1)

	const messages = document.querySelector( '.chat-widget__messages' );
		
	messages.innerHTML += `
	  <div class="message">
	    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
	    <div class="message__text">
	      ${answersArray[answerNumber]}
	    </div>
	  </div>
	`;
}

function userAnswer(event) {

    if ((event.keyCode == 13) && (this.value !== "")) {
    	const messages = document.querySelector( '.chat-widget__messages' );
    	messages.innerHTML += `
		  <div class="message message_client">
		    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
		    <div class="message__text">
		      ${this.value}
		    </div>
		  </div>
		`;
		robotAnswer();
		this.value = "";
    }	

}


const chatActivateButton = document.querySelector(".chat-widget__side")
chatActivateButton.addEventListener("click", function() {document.querySelector(".chat-widget").classList.add("chat-widget_active")} )

const inputMessage = document.querySelector(".chat-widget__input")
inputMessage.addEventListener('keypress', userAnswer)




