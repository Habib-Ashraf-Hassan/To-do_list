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

function shiftTaskUp(index) {
  if (index > 0) {
    const temp = tasks[index];
    tasks[index] = tasks[index - 1];
    tasks[index - 1] = temp;
    renderTasks();
  }
}

function shiftTaskDown(index) {
  if (index < tasks.length - 1) {
    const temp = tasks[index];
    tasks[index] = tasks[index + 1];
    tasks[index + 1] = temp;
    renderTasks();
  }
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

    const upButton = document.createElement("button");
    upButton.textContent = "⬆️";
    upButton.classList.add("up-btn"); // Add up button class
    upButton.onclick = () => shiftTaskUp(index);

    const downButton = document.createElement("button");
    downButton.textContent = "⬇️";
    downButton.classList.add("down-btn"); // Add down button class
    downButton.onclick = () => shiftTaskDown(index);

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle";
    toggleButton.classList.add("toggle-btn"); // Add toggle button class
    toggleButton.onclick = () => toggleTask(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("delete-btn"); // Add delete button class
    deleteButton.onclick = () => deleteTask(index);

    listItem.appendChild(upButton);
    listItem.appendChild(downButton);
    listItem.appendChild(toggleButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}

// Initial render
renderTasks();
