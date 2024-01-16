    document.getElementById("add-task-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const tasksList = document.getElementById("tasks-list");

  if (taskInput.value.trim()) {
    const newTask = document.createElement("li");
    newTask.className = "task-item";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = taskInput.value.trim();
    newTask.appendChild(taskText);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);

    tasksList.appendChild(newTask);

    taskInput.value = "";

    deleteBtn.addEventListener("click", function () {
      tasksList.removeChild(newTask);
    });
  }
});
  
