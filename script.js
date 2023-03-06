const modal = document.getElementById("myModal");
const btn = document.getElementById("new-task");
const modalBtn = document.getElementById("modal-btn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("due-date");
const priority = document.getElementById("priority");
const span = document.getElementsByClassName("close");
const cards = document.getElementById("cards");
const removeBtn = document.getElementsByClassName("remove-btn");

let myTaskList = [];

// Task Constructor
class Task {
  constructor(title, description, due, priority) {
    (this.title = title),
      (this.description = description),
      (this.due = due),
      (this.priority = priority);
  }
  addTask() {
    return addTaskToTaskList(this);
  }
}

// Adds task to array
const addTaskToTaskList = function (task) {
  myTaskList.push(task);
};

const task1 = new Task(
  "Take out trash",
  "Bring trashcan to curb",
  "12-30-2022",
  "Medium Priority"
);
const task2 = new Task(
  "Fold laundry",
  "Take clothes out of the dryer and fold them/put them away",
  "1-2-2023",
  "Low Priority"
);
const task3 = new Task(
  "Finish studying",
  "Finish studying JavaScript",
  "4-17-2045",
  "High Priority"
);

// Placeholder Tasks
task1.addTask();
task2.addTask();
task3.addTask();

// Creates tasks for each card in the DOM
createCard = function () {
  cards.innerHTML = "";
  myTaskList.forEach((task, index) => {
    let html = `<div class="card"><p>${task.title}</p><p>${task.description}</p><p>${task.due}</p><p>${task.priority}</p><button class="remove-btn" onclick="deleteTask(${index})">Delete</div>`;
    cards.innerHTML += html;
  });
};

// Checks the array for already registered tasks
function alreadyInTaskList(title) {
  return myTaskList.some(function (el) {
    return el.title === title;
  });
}

// Functions for modal window
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Bring up modal window with Add a Task form
modalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const task = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );
  modal.style.display = "none";
  if (alreadyInTaskList(title.value)) {
    return alert("Sorry, it looks like this task is already in your Task List");
  }
  task.addTask();
  createCard();
});

// Deletes task card and from array
function deleteTask(index) {
  myTaskList.splice(index, 1);
  createCard();
}
createCard();
