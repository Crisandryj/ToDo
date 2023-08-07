import {ToDoItem} from "./todoitem.js";
import {Project} from "./project.js";


//create default project to add items
let defaultProject = new Project("Default")

//select container
const content = document.querySelector('#content')
//select projects button
const btn = document.querySelector('#projects')

//add heading to home page
function homeDom(){
  const heading = document.createElement('h1')
  content.appendChild(heading)
}
//display home heading
homeDom()

//select list
let list = document.querySelector('.items')

//Add item to list
function updateList (i){
  let item = document.createElement('input')
  item.setAttribute('type','checkbox')
  item.setAttribute('id',i.title)
  let itemName = document.createElement('label')
  itemName.setAttribute('for', "done")
  itemName.textContent = i.title
  console.log(item)
  list.appendChild(itemName)
  itemName.appendChild(item)
}

btn.addEventListener('click', updateList)


let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change',alert('hi'))

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
  updateList(item)
  //clear form
  itemListForm.reset()
  // stop form submission
  event.preventDefault();
});



