const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.getElementById('content')


function removeSpaces(string) {
  return string.split(" ").join('');
 };

function createSelectOptions(project) {
  const option = document.createElement('option')
  option.setAttribute("value",project)
  const projects = document.getElementById('projects')
  projects.appendChild(option)
  option.textContent = project
}

function createItemListTable (project){
  const proj = content.querySelector(`.${ removeSpaces(project)}`)
  const itemContainer = document.createElement('table')
// Row for headers
  const headerRow = document.createElement('tr')
// Headers
  const completeHead = document.createElement('th')
  const itemDescriptionHead = document.createElement('th')
  const dueDateHead = document.createElement('th')
  const priorityHead = document.createElement('th')
// Append headers to row
  headerRow.appendChild(itemDescriptionHead)
  headerRow.appendChild(dueDateHead)
  headerRow.appendChild(priorityHead)
  headerRow.appendChild(completeHead)
// Append with headers row to table
  itemContainer.appendChild(headerRow)
  proj.appendChild(itemContainer)
}


function addProjectToList (project){
  const projectContainer = document.createElement('div')
  const projectName = document.createElement('h2')
  const headingContainer = document.createElement('div')
  headingContainer.classList.add("heading")
  projectContainer.classList.add(removeSpaces(project))
  projectContainer.classList.add('items')
  content.appendChild(projectContainer)
  headingContainer.appendChild(projectName)
  projectContainer.appendChild(headingContainer)
  projectName.textContent = project
  // Remove button
  const button = document.createElement('button')
  button.setAttribute('id',project)
  button.textContent = "Remove Project"
  headingContainer.appendChild(button)
}

function addProjectToSideBar (project){
  const projectContainer = document.getElementById('myDropdown')
  const projectName = document.createElement('a')
  projectName.classList.add(removeSpaces(project))
  projectName.classList.add('items')
  projectContainer.appendChild(projectName)
  projectName.textContent = project
}






export{createItemListTable,createSelectOptions, projectForm, newProjectBtn, todoform, newToDoBtn,addProjectToList,addProjectToSideBar}