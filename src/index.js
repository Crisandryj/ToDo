import {drop} from './menu'
import {Project} from './project'
import { ToDoItem } from './todoitem'

const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.querySelector('.content')

const projectInstances = [];

function addProjectToList (project){
  const list = document.createElement('ul')
  content.appendChild(list)
  const projectContainer = document.createElement('div')
  const projectName = document.createElement('h1')
  projectContainer.classList.add(project)
  projectContainer.classList.add('projects')
  content.appendChild(projectContainer)
  projectContainer.appendChild(projectName)
  projectName.textContent = project
}

function addItemToProject (item,project){
  const proj = document.querySelector(`.${ project.value}`)
  const itemP = document.createElement('p')
  itemP.textContent = item.description
  proj.appendChild(itemP)
  // const projectName = document.createElement('div')
  // content.appendChild(projectName)
  // projectName.textContent = project
}

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

// List projects





