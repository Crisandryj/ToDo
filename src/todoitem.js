class ToDoItem{

  constructor(name){
    this.name = name;
  }

  set setName(name){
    this.name = name;
  }
  get getName(){
    console.log(this.name)
  }



}

export {ToDoItem} 