const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.querySelector('.content')
const sideBar = document.querySelector('.sidebar')

function removeSpaces(string) {
  return string.split(' ').join('');
 };

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
  const projectName = document.createElement('h2')
  projectContainer.classList.add(removeSpaces(project))
  projectContainer.classList.add('projects')
  content.appendChild(projectContainer)
  projectContainer.appendChild(projectName)
  projectName.textContent = project
}

function addProjectToSideBar (project){
  const list = document.createElement('ul')
  sideBar.appendChild(list)
  const projectContainer = document.createElement('div')
  const projectName = document.createElement('h2')
  projectContainer.classList.add(removeSpaces(project))
  projectContainer.classList.add('projects')
  sideBar.appendChild(projectContainer)
  projectContainer.appendChild(projectName)
  projectName.textContent = project
}

function addItemToProject (item,project){
  const proj = content.querySelector(`.${ removeSpaces(project.value)}`)
  const itemP = document.createElement('li')
  const itemTitle = document.createElement('li')
  const itemDueDate = document.createElement('li')
  const itemPriority = document.createElement('li')
  const itemContainer = document.createElement('div')
  itemContainer.classList.add('item')
  const completeBtn = document.createElement('input')
  completeBtn.setAttribute('type','radio')
  completeBtn.addEventListener('click',()=>{
   itemContainer.remove()
  })
  itemContainer.appendChild(itemP)
  itemContainer.appendChild(itemTitle)
  itemContainer.appendChild(itemDueDate)
  itemContainer.appendChild(itemPriority)
  itemContainer.appendChild(completeBtn)
  itemP.textContent = item.description
  itemTitle.textContent = item.title
  itemDueDate.textContent = item.dueDate
  itemPriority.textContent = item.priority
  proj.appendChild(itemContainer)
}





export{createSelectOptions, projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn,addProjectToList,addProjectToSideBar}