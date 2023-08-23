const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const deleteButton = document.querySelector(".deleteButton");

// Function to display tasks from local storage
function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

// Function to add task to local storage
function addTask(event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task !== "") {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    taskInput.value = "";
  }
}

// Function to clear all tasks from local storage
function clearTasks() {
  localStorage.removeItem("tasks");
  displayTasks();
}

taskForm.addEventListener("submit", addTask);
deleteButton.addEventListener("click", clearTasks);

// Display initial tasks on page load
displayTasks();
