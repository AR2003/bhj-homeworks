
// функция обработки нажатия клавиши, "ловит enter"
function fieldProcess(event) {
	if ((event.keyCode == 13) && (this.value !== "")) {
		addTask(this.value);		
	}	
	event.preventDefault();
	return false
}

// функция обработки кнопки "добавить"
function buttonProcess() {
	const taskField = document.querySelector(".tasks__input");
	if (taskField.value !== "") {
		addTask(taskField.value);		
	}	
	event.preventDefault();
	return false
}

// функция удаления пункта из списка задач
 function removeProcess() {
 	this.closest(".task").remove() 	
 	taskStorage();
 }


// функция сохранения актуального списка задач в local storage
 function taskStorage() {   
    localStorage.removeItem("myTasks");
    const allTasks = document.querySelectorAll(".task__title");
    if (allTasks != null) {
	    let arrOfTasks = []
	    for (let i = 0; i < allTasks.length; i++) {
	    	arrOfTasks.push(allTasks[i].textContent)
	    }
	    localStorage.setItem("myTasks", arrOfTasks)
    }

 }


// функция добавления html-разметки для новой задачи
function addTask(taskText) {
	

	const taskList = document.querySelector(".tasks__list");
	const insertText = ` <div class='task'>
	              				<div class='task__title'>
	                    	       ${taskText}
	              	  		 	</div>
	              				<a href='#'' class='task__remove'>&times;</a>
	            			</div> `

	taskList.insertAdjacentHTML("beforeEnd",insertText);
	const taskField = document.querySelector(".tasks__input")	 
	taskField.value = "" ;  
	const tasks = taskList.querySelectorAll(".task__remove");
	const lastTask = tasks[tasks.length - 1];  
	lastTask.addEventListener("click", removeProcess);
	taskStorage();    
   
    return false;
    
}

 
const taskInput = document.querySelector(".tasks__input");  
taskInput.addEventListener("click",fieldProcess);

const taskAddButton = document.querySelector(".tasks__add");
taskAddButton.addEventListener("click",buttonProcess);

// восстановление списка задач из local storage
savedTasks = localStorage.getItem("myTasks")
if  (savedTasks != null) {
	savedTasks = savedTasks.split(",");
    for (let i = 0; i < savedTasks.length; i++) {
	    	addTask(savedTasks[i])
	    }	
}



