import {Project} from './project'
import { ToDoItem } from './todoitem'
import { createSelectOptions, projectForm, newProjectBtn, 
          todoform, newToDoBtn, addProjectToList,
          addProjectToSideBar,createItemListTable} from './projectList'


const content = document.getElementById('content')

// Default Project when page starts
  const defalutProject = new Project("Inbox")
  addProjectToList(defalutProject.name)
  createItemListTable(defalutProject.name);
  
function createProject(){
  const project = projectForm.elements.name
  createSelectOptions(project.value)
  const newProject = new Project(project.value)
  addProjectToList(newProject.name)
  addProjectToSideBar(newProject.name)
  createItemListTable(project.value);
};

function createTodoItem(){
  const itemProject = todoform.elements.projects
  const itemTitle = todoform.elements.title
  const itemDescription = todoform.elements.description
  const itemDueDate = todoform.elements.dueDate
  const itemPriority = todoform.elements.priority
  const todoItem = new ToDoItem(itemTitle.value,itemDescription.value,itemDueDate.value,itemPriority.value)  
  const projTable = document.querySelector(`.${itemProject.value}.items table`)
  // table row
  const itemRow = document.createElement('tr')
  // table data
  const descriptionData = document.createElement('td');
  descriptionData.textContent = todoItem.description
  const priorityData =  document.createElement('td');
    // Mark as completed
  const completeData =  document.createElement('td');
  const completeBtn = document.createElement('input')
  completeData.appendChild(completeBtn)
  completeBtn.setAttribute('type','radio')
  // Change priority color
  if(itemPriority.value >= 50){
    completeBtn.style.borderColor = "red";
  }else{
    completeBtn.style.borderColor = "blue";
  }
  completeBtn.addEventListener('click',()=>{
    itemRow.remove()
  })
  // Add data to row
  itemRow.appendChild(completeData)
  itemRow.appendChild(descriptionData)
  itemRow.appendChild(priorityData)
  // Add to table
  projTable.appendChild(itemRow)
};

projectForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  createProject()
  projectForm.reset()  
} );


// Hide/Show form when button clicked
newProjectBtn.addEventListener('click', () =>{
  projectForm.classList.toggle('hide')
});


todoform.addEventListener('submit',(e)=>{
  e.preventDefault();
  createTodoItem()
  todoform.reset()
} );

// Hide/Show form when button clicked
newToDoBtn.addEventListener('click', () =>{
  todoform.classList.toggle('hide')
});



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

 const dropdown = document.getElementById("myDropdown")
 const dropbtn =  document.querySelector(".dropbtn")

 dropbtn.addEventListener('click',()=>{
    dropdown.classList.toggle("show");
  })

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Remove Project from content 

 content.addEventListener('click', e =>
 {
  if (e.target.matches("button")){
    e.target.parentNode.parentNode.removeChild(e.target.closest('div'))
  }
})






