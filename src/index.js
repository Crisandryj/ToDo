import {ToDoItem} from "./todoitem.js";
import {Project} from "./project.js";

//select container
const content = document.querySelector('#content')

function homeDom(){
  const heading = document.createElement('h1')
  heading.textContent = "All List"
  content.appendChild(heading)
}
//display home heading
homeDom()



//create default project to add items
let defaultProject = new Project("Default")

//select list form
const itemListForm = document.getElementById("itemList")

// collect input from form
itemListForm.addEventListener('submit', (event) => {
  let title = itemListForm['title'].value
  let description = itemListForm['description'].value
  let dueDate = itemListForm['dueDate'].value
  let priority = itemListForm['priority'].value
  //create item
  let item = new ToDoItem(title,description,dueDate,priority)
  //add to defualt project
  defaultProject.items.push(item)
  console.log(defaultProject.items)
  //clear form
  itemListForm.reset()
  // stop form submission
  event.preventDefault();
});


console.log(defaultProject.items)
