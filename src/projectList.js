const projectForm = document.getElementById('projectform')
const todoform = document.getElementById('todoform')
const newProjectBtn = document.querySelector('#newproject')
const newToDoBtn = document.querySelector('#newitem')
const content = document.getElementById('content')


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
  const projectContainer = document.createElement('div')
  const projectName = document.createElement('h2')
  const button = document.createElement('button')
  button.setAttribute('id',project)
  button.textContent = "Remove"
  projectContainer.classList.add(removeSpaces(project))
  projectContainer.classList.add('items')
  content.appendChild(projectContainer)
  projectContainer.appendChild(projectName)
  projectContainer.appendChild(button)
  projectName.textContent = project
}

function addProjectToSideBar (project){
  const projectContainer = document.getElementById('myDropdown')
  const projectName = document.createElement('a')
  projectContainer.classList.add(removeSpaces(project))
  projectContainer.classList.add('items')
  projectContainer.appendChild(projectName)
  projectName.textContent = project
}

function addItemToProject (item,project){
  const proj = content.querySelector(`.${ removeSpaces(project.value)}`)
  const itemContainer = document.createElement('table')
  // Headers
  const itemDescriptionHead = document.createElement('th')
  const itemTitleHead = document.createElement('th')
  const itemDueDateHead = document.createElement('th')
  const itemPriorityHead = document.createElement('th')
  // Rows
  const headerRow = document.createElement('tr')
  const dataRow = document.createElement('tr')
  // Data
  const itemDescription = document.createElement('td')
  const itemTitle = document.createElement('td')
  const itemDueDate = document.createElement('td')
  const itemPriority = document.createElement('td')
  itemContainer.classList.add('item')
  const completeBtn = document.createElement('input')
  completeBtn.setAttribute('type','radio')
  completeBtn.addEventListener('click',()=>{
   itemContainer.remove()
  })
  itemDescriptionHead.textContent = "Description"
  headerRow.appendChild(itemDescriptionHead)
  dataRow.appendChild(completeBtn)
  dataRow.appendChild(itemDescription)
  dataRow.appendChild(itemTitle)
  dataRow.appendChild(itemDueDate)
  dataRow.appendChild(itemPriority)
  itemContainer.appendChild(dataRow)
  itemDescription.textContent = item.description
  itemTitle.textContent = item.title
  itemDueDate.textContent = item.dueDate
  itemPriority.textContent = item.priority
  proj.appendChild(itemContainer)
}





export{createSelectOptions, projectForm, newProjectBtn, todoform, addItemToProject, newToDoBtn,addProjectToList,addProjectToSideBar}