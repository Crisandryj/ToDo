import {drop} from './menu'
import {Project} from './project'
import { ToDoItem } from './todoitem'
import { createSelectOptions, projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn, projectInstances,addProjectToList,addProjectToSideBar} from './listAllProjects'

function createProject(){
  const project = projectForm.elements.name
  createSelectOptions(project.value)
  const newProject = new Project(project.value)
  projectInstances.push(newProject)
  addProjectToList(newProject.name)
  addProjectToSideBar(newProject.name)
}

// Create new project
projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  createProject()
  projectForm.reset()  
} )

// Hide/Show form when button clicked
newProjectBtn.addEventListener('click', () =>{
  projectForm.classList.toggle('hide')
})

// Create new todoitem
todoform.addEventListener('submit',(e)=>{
  e.preventDefault();
  const itemProject = todoform.elements.projects
  const itemTitle = todoform.elements.title
  const itemDescription = todoform.elements.description
  const itemDueDate= todoform.elements.dueDate
  const itemPriority = todoform.elements.priority
  const todoItem = new ToDoItem(itemTitle.value,itemDescription.value,itemDueDate.value,itemPriority.value)
  addItemToProject(todoItem,itemProject)
  todoform.reset()
} )

// Hide/Show form when button clicked
newToDoBtn.addEventListener('click', () =>{
  todoform.classList.toggle('hide')
})





