import {drop} from './menu'
import {Project} from './project'

const projectForm = document.getElementById('projectform')
const newProjectBtn = document.querySelector('#newproject')
const content = document.querySelector('.content')

const projectInstances = [];

function addProjectToList (project){
  const list = document.createElement('ul')
  content.appendChild(list)
  const listItem = document.createElement('li')
  content.appendChild(listItem)
  listItem.textContent = project
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

// List projects





