# to-do-list

A "To-Do" list web application using HTML, CSS, JavaScript, and local storage.

Will need to:

1. Write HTML boilerplate, title, certain static divs that remain constant such as page header, sidebar, tabs.

2. Using JavaScript, add and remove task-cards from webpage. Probably copy and refactor code from myLibrary repo, but replace book info with:
   a. Task Title
   b. Description
   c. Due-date

Optional:
d. Priority (Maybe a dropdown list with 1 - low priority | 2 - Medium Priority | 3 - High Priority), color cards based on priority?
e. Notes
f. Checklist

3. Create an edit button per card that allows user to edit task info.

4. Create 'Different Project' functionality - If I click on one project I'll have a todo list for that project, clicking a seperate project will show me a different todo list. Probably using a Project constructor to create a project object with the todo tasks inside of that object. Using a function to add the object (project) name to the DOM on the sidebar, and when clicked will render the object properties (task > title, description, due date, priority, etc) on the page.

Wednesday edit: Project constructor like this? Will need to construct the project object inserting a project name(title) and array(taskList). When a project is constructed it adds a button to the sidebar that when clicked on, calls createCard(<projectName>.taskList) to render that projects tasks in the DOM. Thursday edit: using maybe foreach.project.task?
class Project {
constructor(title, taskList) {
(this.title = title),
(this.taskList = taskList),
}
addTask() {
return addTaskToTaskList(this);
}
}


Currently the "createCard" function uses the "myTaskList" array to create the cards. Maybe I should pass in a certain array as an argument to createCard and use that argument as the array to create the cards. For example: Click on Project 1 and it calls (createCard(project1) which in turn runs project1.forEach((task, index) => {
}
and click on project 2 and it runs project2.forEach, etc.)

4. Research and implement storing the objects in local storage and retrieving them on page load.
