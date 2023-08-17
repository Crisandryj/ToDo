class Project{


constructor(name){
  this.name = name
  this.items = []
}

 setItem(item){
  this.items.push(item)
}

getItems(){
  return this.items
};


}


export {Project}