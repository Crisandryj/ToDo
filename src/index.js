import {drop} from './menu'
import {Project} from './project'
import { ToDoItem } from './todoitem'
import { createSelectOptions, projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn, projectInstances,addProjectToList,addProjectToSideBar} from './listAllProjects'

const defalutProject = new Project("default")
projectInstances.push(defalutProject)
addProjectToList(defalutProject.name)
addProjectToSideBar(defalutProject.name)

function createProject(){
  const project = projectForm.elements.name
  createSelectOptions(project.value)
  const newProject = new Project(project.value)
  projectInstances.push(newProject)
  addProjectToList(newProject.name)
  addProjectToSideBar(newProject.name)
}
function createTodoItem(){
  const itemProject = todoform.elements.projects
  const itemTitle = todoform.elements.title
  const itemDescription = todoform.elements.description
  const itemDueDate= todoform.elements.dueDate
  const itemPriority = todoform.elements.priority
  const todoItem = new ToDoItem(itemTitle.value,itemDescription.value,itemDueDate.value,itemPriority.value)
  addItemToProject(todoItem,itemProject)
}

projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  createProject()
  projectForm.reset()  
} )

// Hide/Show form when button clicked
newProjectBtn.addEventListener('click', () =>{
  projectForm.classList.toggle('hide')
})


todoform.addEventListener('submit',(e)=>{
  e.preventDefault();
  createTodoItem()
  todoform.reset()
} )

// Hide/Show form when button clicked
newToDoBtn.addEventListener('click', () =>{
  todoform.classList.toggle('hide')
})