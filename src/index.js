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
const project1 = new Project("todo list", [
  {
    taskName: "feed Dog",
    taskDescription: "get food out",
    dueDate: "1-2-3",
    priority: "high",
  },
]);
projects.push(project1);
// project1.tasks.push([{taskName: "asdf", taskDescription: "asdf", dueDate: "asdfff", priority: "ffff"}]);

// Render the form in the DOM
const renderAddProjectForm = function () {
  content.innerText = "";

  // Create a form element
  const form = document.createElement("form");

  // Create input elements for project name, task name, task description, due date, and priority
  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.name = "project-name";
  projectNameInput.placeholder = "Project Name";

  // Create a submit button for the form
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Project";

  // Append input elements and submit button to the form
  form.appendChild(projectNameInput);
  form.appendChild(submitButton);

  // Append the form element to the "tasks" element in the DOM
  content.appendChild(form);

  // When submit is clicked, add input values to the projects array
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitAddProjectForm(projectNameInput.value);
  });
};

const submitAddProjectForm = function (projectName) {
  const projectExists = projects.some(
    (project) => project.name === projectName
  );

  if (projectExists) {
    alert(`Project '${projectName}' already exists.`);
    return;
  }

  const newProject = new Project(projectName, []);

  projects.push(newProject);

  renderProjects();
};

console.log(project1.tasks);
// Adding 'add project' button to sidebar
const renderAddProjectButton = function () {
  const addProjectButton = document.createElement("button");
  addProjectButton.innerText = "Add a Project";
  sidebar.appendChild(addProjectButton);

  // When add project is clicked, runs the renderAddProjectForm function
  addProjectButton.addEventListener("click", () => {
    renderAddProjectForm();
  });
};
// Loops through projects array and appends the project name to the sidebar as a button
const renderProjects = function () {
  sidebar.innerHTML = "";
  renderAddProjectButton();
  projects.forEach((project) => {
    const projectNameElement = document.createElement("button");
    projectNameElement.textContent = project.name;
    sidebar.appendChild(projectNameElement);

    projectNameElement.addEventListener("click", () => {
      console.log(project);
      renderTasks(project);
      console.log(project);
    });
  });
};

const renderTasks = function (project) {
  content.innerHTML = "";

  // Creates a header element for displaying selected project name at the top of the tasks area
  const header = document.createElement("h2");
  header.textContent = project.name;
  content.appendChild(header);

  // Create an 'Add Task' button
  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add a Task";
  content.appendChild(addTaskButton);

  addTaskButton.addEventListener("click", () => {
    renderAddTaskForm(project);
  });

  // Loops through the tasks array of the selected project
  project.tasks.forEach((task) => {
    console.log(task.taskName);
    // Creates div for each tasks card
    const taskDiv = document.createElement("div");

    // Creates elements for each part of the task card (name, description, due date, priority)
    const taskHeader = document.createElement("h3");
    taskHeader.textContent = task.taskName;
    taskDiv.appendChild(taskHeader);

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.taskDescription;
    taskDiv.appendChild(taskDescription);

    const dueDate = document.createElement("p");
    dueDate.textContent = task.dueDate;
    taskDiv.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.textContent = task.priority;
    taskDiv.appendChild(priority);

    // Creates a button to remove tasks from the project
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete Task";
    taskDiv.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
      const taskIndex = project.tasks.indexOf(task);
      project.tasks.splice(taskIndex, 1);
      renderTasks(project);
    });
    content.appendChild(taskDiv);
  });
};

const renderAddTaskForm = function (project) {
  content.innerHTML = "";

  console.log(project);

  const form = document.createElement("form");

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
  submitButton.textContent = "Add Task";

  form.appendChild(taskNameInput);
  form.appendChild(taskDescriptionInput);
  form.appendChild(dueDateInput);
  form.appendChild(priorityInput);
  form.appendChild(submitButton);
  content.appendChild(form);

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitAddTaskForm(
      project,
      taskNameInput.value,
      taskDescriptionInput.value,
      dueDateInput.value,
      priorityInput.value
    );
  });
};

const submitAddTaskForm = function (
  projectName,
  taskName,
  taskDescription,
  dueDate,
  priority
) {
  console.log(projectName.tasks);
  projectName.tasks.push({ taskName, taskDescription, dueDate, priority });
  console.log(projectName.tasks);
  console.log(projectName);
  renderTasks(projectName);
};

renderProjects();
