import {Project} from './project'
import { ToDoItem } from './todoitem'
import { createSelectOptions, projectForm, newProjectBtn, 
          todoform, newToDoBtn, addProjectToList,
          addProjectToSideBar,createItemListTable} from './projectList'


const content = document.getElementById('content')

// Default Project when page starts
const defalutProject = new Project("Inbox")
addProjectToList(defalutProject.name)


function createProject(){
  const project = projectForm.elements.name
  createSelectOptions(project.value)
  const newProject = new Project(project.value)
  addProjectToList(newProject.name)
  addProjectToSideBar(newProject.name)
};

function createTodoItem(){
  const itemProject = todoform.elements.projects
  const itemTitle = todoform.elements.title
  const itemDescription = todoform.elements.description
  const itemDueDate= todoform.elements.dueDate
  const itemPriority = todoform.elements.priority
  const todoItem = new ToDoItem(itemTitle.value,itemDescription.value,itemDueDate.value,itemPriority.value)
  createItemListTable(todoItem,itemProject);
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