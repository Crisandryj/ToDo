import {drop} from './menu'
import {Project} from './project'

const projectForm = document.getElementById('projectform')



projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const project = projectForm.elements.name
  const newProject = new Project(project.value)
} )


