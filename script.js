let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    taskInput.value = "";
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.text;
    if (task.completed) {
      listItem.classList.add("completed");
    }

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle";
    toggleButton.onclick = () => toggleTask(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(index);

    listItem.appendChild(toggleButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

// Initial render
renderTasks();
