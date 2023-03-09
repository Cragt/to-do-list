import "./style.css";
const tasks = document.getElementById("tasks");
let myTaskList = [];

// Project Constructor

class Project {
  constructor(id, projectName, task) {
    (this.id = id), (this.projectName = projectName), (this.task = task);
  }
  addTask() {
    return addTaskToTaskList(this);
  }
}

// Adds task to array
const addTaskToTaskList = function (task) {
  myTaskList.push(task);
};

const project1 = new Project("0", "Todo List", [
  "Finish Javascript",
  "Complete delete button function",
  "2-1-1993",
  "High Priority",
]);
project1.addTask();

const selectSidebar = document.getElementById("projects");
const project1Button = document.createElement("button");
project1Button.textContent = project1.projectName;
selectSidebar.appendChild(project1Button);

project1Button.addEventListener("click", function (event) {
  event.preventDefault();
  createCard(myTaskList);
  console.log(myTaskList);
});

console.log(project1.task[2]);

// Creates tasks for each card in the DOM
let createCard = function (project) {
  tasks.innerHTML = "";
  project.forEach((task, index) => {
    let html = `<div class="cards"><div class="card"><p>${task.task[0]}</p><p>${task.task[1]}</p><p>${task.task[2]}</p><p>${task.task[3]}</p><button class="remove-btn" data-index="${index}">Delete</button></div></div>`;
    tasks.innerHTML += html;
  });

  // Adds event listeners to delete buttons
  //   const deleteButtons = document.querySelectorAll(".remove-btn");
  //   deleteButtons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       const index = button.dataset.index;
  //       deleteCard(index);
  //     });
  //   });
  // };

  // function deleteCard(index) {
  //   myTaskList.splice(index, 1);
  //   createCard(myTaskList);
  console.log(myTaskList);
};
