import {drop} from './menu'
import {Project} from './project'

const projectForm = document.getElementById('projectform')

const projectInstances = [];

projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const project = projectForm.elements.name
  const newProject = new Project(project.value)
  projectInstances.push(newProject)
  projectForm.reset()
} )

console.log(projectInstances)

