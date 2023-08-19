import {drop} from './menu'
import {Project} from './project'

const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.querySelector('.content')

const projectInstances = [];

function addProjectToList (project){
  const list = document.createElement('ul')
  content.appendChild(list)
  const projectName = document.createElement('button')
  projectName.classList.add(project)
  content.appendChild(projectName)
  projectName.textContent = project
}

function addItemToProject (project){
  const list = document.createElement('ul')
  content.appendChild(list)
  const projectName = document.createElement('button')
  content.appendChild(projectName)
  projectName.textContent = project
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
  const project = todoform.elements.name
  const newProject = new Project(project.value)
  projectInstances.push(newProject)
  addProjectToList(newProject.name)
  todoform.reset()
} )

// Hide/Show form when button clicked
newToDoBtn.addEventListener('click', () =>{
  todoform.classList.toggle('hide')
})

// List projects





