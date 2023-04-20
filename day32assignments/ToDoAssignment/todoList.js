
// Create a to-do list and it must accomplish the following things:

// Show an unordered list of to-do items
// Show an input to enter a new to-do
// Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
 
function init() {
	var taskList = document.getElementById("task-list");
	var taskItems = taskList.getElementsByTagName("li");
	for (var i = 0; i < taskItems.length; i++) {
	  taskItems[i].addEventListener("click", function() {
		this.remove();
	  });
	}
	var addTaskButton = document.getElementById("add-task");
	addTaskButton.addEventListener("click", addTask);
  }




function addTask() {
	console.log("add task function called");
	var taskInput = document.getElementById("new-task");
	var taskList = document.getElementById("task-list");
	var newTask = document.createElement("li");
	newTask.textContent = taskInput.value;
	newTask.addEventListener("click", function() {
	  console.log('llist item clicked');
	  this.parentNode.removeChild(this);
	});
	taskList.appendChild(newTask);
	taskInput.value = "";
  }

  init();