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
