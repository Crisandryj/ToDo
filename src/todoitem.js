class ToDoItem{

  constructor(title,description,dueDate,priority,complete){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete
  }

  markComplete(){
    this.complete = true;
  }

  unmarkComplete(){
    this.complete = false;
  }

}

export default ToDoItem