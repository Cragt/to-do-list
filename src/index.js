import { projects, Project } from "./projects";
import { renderPage } from "./renderer";
import "./style.css";

// Create example project
const example = new Project("Example Project", [
  {
    taskName: "feed Dog",
    taskDescription: "get food out",
    dueDate: "1-2-3",
    priority: "high",
  },
]);
projects.push(example);

renderPage.renderProjects();
