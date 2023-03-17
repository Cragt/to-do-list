const storedProjects = localStorage.getItem("projects");

// Create empty project array
let projects = [];

// Project constructor
class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }
}

// Check if projects are stored in localStorage
if (storedProjects) {
  projects = JSON.parse(storedProjects);
} else {
  // Create example project and add to projects array
  const example = new Project("Example Project", [
    {
      taskName: "feed Dog",
      taskDescription: "get food out",
      dueDate: "1-2-3",
      priority: "high",
    },
  ]);
  projects.push(example);

  // Store projects array in localStorage
  localStorage.setItem("projects", JSON.stringify(projects));
}

export { projects, Project };
