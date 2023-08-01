function homeHeading(){
const content = document.querySelector('#content')
const heading = document.createElement('h1')
heading.textContent = "Todo List"
content.appendChild(heading)
}

export {homeHeading}
