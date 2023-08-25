const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.querySelector('.content')
const sideBar = document.querySelector('.sidebar')



function createSelectOptions(project) {
  const option = document.createElement('option')
  option.setAttribute("value",project)
  const projects = document.getElementById('projects')
  projects.appendChild(option)
  option.textContent = project
}

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
  const itemContainer = document.createElement('div')
  const completeBtn = document.createElement('input')
  completeBtn.setAttribute('type','radio')
  completeBtn.addEventListener('click',()=>{
   itemContainer.remove()
  })
  itemContainer.appendChild(itemP)
  itemContainer.appendChild(completeBtn)
  itemP.textContent = item.description
  proj.appendChild(itemContainer)
}





export{createSelectOptions, projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn,addProjectToList,addProjectToSideBar}