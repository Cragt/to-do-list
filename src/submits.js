import { projects, Project } from "./projects";
import { renderPage } from "./renderer";

const submitModule = (function () {
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
    localStorage.setItem("projects", JSON.stringify(projects));

    renderPage.renderProjects();
  };

  const submitAddTaskForm = function (
    projectName,
    taskName,
    taskDescription,
    dueDate,
    priority
  ) {
    projectName.tasks.push({ taskName, taskDescription, dueDate, priority });
    localStorage.setItem("projects", JSON.stringify(projects));
    renderPage.renderTasks(projectName);
  };

  return {
    submitAddProjectForm,
    submitAddTaskForm,
  };
})();

export { submitModule };
