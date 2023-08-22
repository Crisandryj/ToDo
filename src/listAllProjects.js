const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.querySelector('.content')
const sideBar = document.querySelector('.sidebar')

const projectInstances = [];

// Working on creating select option when project is created
function createSelectOptions() {
  const option = document.createElement('option')
  const projects = document.getElementById('projects')
  projects.appendChild(option)
}

function addProjectToList (project){
  createSelectOptions()
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

function addProjectToSideBar (project){
  const list = document.createElement('ul')
  sideBar.appendChild(list)
  const projectContainer = document.createElement('div')
  const projectName = document.createElement('h1')
  projectContainer.classList.add(project)
  projectContainer.classList.add('projects')
  sideBar.appendChild(projectContainer)
  projectContainer.appendChild(projectName)
  projectName.textContent = project
}

function addItemToProject (item,project){
  const proj = content.querySelector(`.${ project.value}`)
  const itemP = document.createElement('p')
  itemP.textContent = item.description
  proj.appendChild(itemP)}

  // const projectName = document.createElement('div')
  // content.appendChild(projectName)
  // projectName.textContent = project




export{createSelectOptions, projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn, projectInstances,addProjectToList,addProjectToSideBar}