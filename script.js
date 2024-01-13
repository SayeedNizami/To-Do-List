function addTask() {
    // Get the input value
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value;
  
    // If the input is not empty, create a new task
    if (taskText.trim() !== '') {
      // Create a new task element
      var taskElement = document.createElement('div');
      taskElement.className = 'task';
  
      // Create a paragraph element for the task text
      var taskParagraph = document.createElement('p');
      taskParagraph.textContent = taskText;
  
      // Create a button to remove the task
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function () {
        taskElement.remove();
      };
  
      // Append the paragraph and button to the task element
      taskElement.appendChild(taskParagraph);
      taskElement.appendChild(removeButton);
  
      // Append the task element to the tasks container
      var tasksContainer = document.getElementById('tasks-container');
      tasksContainer.appendChild(taskElement);
  
      // Clear the input field
      taskInput.value = '';
    }
  }
  