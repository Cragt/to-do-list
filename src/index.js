import "./style.css";
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("tasks");
// Create empty project array
let projects = [];

// Project constructor
class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }
}

// Testing the constructor / Array
// console.log(projects)
const project1 = new Project("todo list", [
  "feed dog",
  "eat food",
  "finish project",
  "relax",
]);
projects.push(project1);

// Adding 'add project' button to sidebar

const addProjectButton = document.createElement("button");
addProjectButton.innerText = "Add a Project";
sidebar.appendChild(addProjectButton);

// When add project is clicked, runs the renderForm function
addProjectButton.addEventListener("click", () => {
  renderForm();
});

// Render the form in the DOM
const renderForm = function () {
  tasks.innerText = "";

  // Create a form element
  const form = document.createElement("form");

  // Create input elements for project name, task name, task description, due date, and priority
  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.name = "project-name";
  projectNameInput.placeholder = "Project Name";

  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.name = "task-name";
  taskNameInput.placeholder = "Task Name";

  const taskDescriptionInput = document.createElement("textarea");
  taskDescriptionInput.name = "task-description";
  taskDescriptionInput.placeholder = "Task Description";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "due-date";

  const priorityInput = document.createElement("select");
  priorityInput.name = "priority";

  // Create option elements for priority select
  const highPriorityOption = document.createElement("option");
  highPriorityOption.value = "high";
  highPriorityOption.textContent = "High";

  const mediumPriorityOption = document.createElement("option");
  mediumPriorityOption.value = "medium";
  mediumPriorityOption.textContent = "Medium";

  const lowPriorityOption = document.createElement("option");
  lowPriorityOption.value = "low";
  lowPriorityOption.textContent = "Low";

  // Append option elements to the priority select
  priorityInput.appendChild(lowPriorityOption);
  priorityInput.appendChild(mediumPriorityOption);
  priorityInput.appendChild(highPriorityOption);

  // Create a submit button for the form
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Project";

  // Append input elements and submit button to the form
  form.appendChild(projectNameInput);
  form.appendChild(taskNameInput);
  form.appendChild(taskDescriptionInput);
  form.appendChild(dueDateInput);
  form.appendChild(priorityInput);
  form.appendChild(submitButton);

  // Append the form element to the "tasks" element in the DOM
  const tasksElement = document.getElementById("tasks");
  tasksElement.appendChild(form);

  // When submit is clicked, add input values to the projects array
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitAddForm(
      projectNameInput.value,
      taskNameInput.value,
      taskDescriptionInput.value,
      dueDateInput.value,
      priorityInput.value
    );
  });
};

const submitAddForm = function (
  projectName,
  taskName,
  taskDescription,
  dueDate,
  priority
) {
  const projectExists = projects.some(
    (project) => project.name === projectName
  );

  if (projectExists) {
    alert(`Project '${projectName}' already exists.`);
    return;
  }

  const newProject = new Project(projectName, [
    taskName,
    taskDescription,
    dueDate,
    priority,
  ]);

  projects.push(newProject);

  renderProjects();
};

// Loops through projects array and appends the project name to the sidebar as a button
const renderProjects = function () {
  sidebar.innerHTML = "";

  projects.forEach((project) => {
    const projectNameElement = document.createElement("button");
    projectNameElement.textContent = project.name;
    sidebar.appendChild(projectNameElement);
  });
};
