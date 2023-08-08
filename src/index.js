import { ToDoItem } from './todoitem';
import { Project } from './project';

// create default project to add items
const defaultProject = new Project('Default');

// select container
const content = document.querySelector('#content');


// add heading to home page
function homeDom() {
  const heading = document.createElement('h1');
  content.appendChild(heading);
}
// display home heading
homeDom();

// select list
const list = document.querySelector('.items');

// Add item to list
function updateList(i) {
  const item = document.createElement('input');
  item.setAttribute('type', 'checkbox');
  item.setAttribute('id', 'checkbox');
  const itemName = document.createElement('label');
  itemName.setAttribute('for', 'done');
  itemName.textContent = i.title;
  list.appendChild(itemName);
  itemName.appendChild(item);
}
// select projects button
const btn = document.querySelector('#projects');
// listen to btn
btn.addEventListener('click', updateList);

// select list form
const itemListForm = document.getElementById('itemList');

// collect input from form
itemListForm.addEventListener('submit', (event) => {
  const title = itemListForm.title.value;
  const description = itemListForm.description.value;
  const dueDate = itemListForm.dueDate.value;
  const priority = itemListForm.priority.value;
  // create item
  const item = new ToDoItem(title, description, dueDate, priority);
  // add to defualt project
  defaultProject.items.push(item);
  updateList(item);
  // clear form
  itemListForm.reset();
  // stop form submission
  event.preventDefault();
});
