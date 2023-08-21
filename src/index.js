import {drop} from './menu'
import {Project} from './project'
import { ToDoItem } from './todoitem'
import { projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn, projectInstances,addProjectToList} from './listAllProjects'



// Create new project
projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const project = projectForm.elements.name
  const newProject = new Project(project.value)
  projectInstances.push(newProject)
  addProjectToList(newProject.name)
  projectForm.reset()
} )

// Hide/Show form when button clicked
newProjectBtn.addEventListener('click', () =>{
  projectForm.classList.toggle('hide')
})

// Create new todoitem
todoform.addEventListener('submit',(e)=>{
  e.preventDefault();
  const itemProject = todoform.elements.project
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





