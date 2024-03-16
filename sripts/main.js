document.addEventListener("DOMContentLoaded", function(){
    bindEvents();
})

function bindEvents() {
    const addButton = document.querySelector(".main-input__add");
    addButton.addEventListener("click", (event)=>{
        addTask(event.target);
    })
    
}

function addTask (button){
    const inputElement = button.previousElementSibling;
    let inputValue = inputElement.value.trim();
    if(inputValue == ""){
        console.log("Error");
        return;
    }
    createTaskElement(inputValue);
} 

function createTaskElement(textValue) {
    const listItemWrapper = document.createElement("div");
    const textSpan = document.createElement("span");
    const button = document.createElement("button");
    listItemWrapper.classList.add("list-item");
    console.log(listItemWrapper);
}