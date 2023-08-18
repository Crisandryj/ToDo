import {drop} from './menu'
import {Project} from './project'

const projectForm = document.getElementById('projectform')
const projectInstances = [];
const newProjectBtn = document.querySelector('#newproject')

projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const project = projectForm.elements.name
  const newProject = new Project(project.value)
  projectInstances.push(newProject)
  projectForm.reset()
} )



// Hide/Show form when button clicked
newProjectBtn.addEventListener('click', () =>{
  projectForm.classList.toggle('hide')
})

console.log(projectInstances)

