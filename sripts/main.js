document.addEventListener("DOMContentLoaded", function(){
    bindEvents();
    getSavedTasks();
})
let cookieObject = {};
let cookieStringGlobal = "task=apple;hub=mamamaam";

function bindEvents() {
    const addButton = document.querySelector(".main-input__add");
    addButton.addEventListener("click", (event)=>{
        addTask(event.target);
    })
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("list-item__remove")) {
            removeTask(event.target)
        }
    })
    
}

function addTask (button){
    const inputElement = button.previousElementSibling;
    let inputValue = inputElement.value.trim();
    inputElement.value = "";
    if(inputValue == ""){
        alert("Задача не может быть пустой")
        return;
    }
    const listItem = createTaskElement(inputValue);
    const listItems = document.querySelector(".list-items");
    listItems.appendChild(listItem);
} 

function createTaskElement(textValue) {
    const listItemWrapper = document.createElement("div");
    const textSpan = document.createElement("span");
    const button = document.createElement("button");

    listItemWrapper.classList.add("list-item");
    textSpan.classList.add("list-item__text");
    button.classList.add("list-item__remove");
    textSpan.innerHTML = textValue;
    button.innerHTML = "<svg width=\"17\" height= \"20\" viewBox=\"0 0 17 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_1_62)\"><path d=\"M6.80001 3.79471e-06C6.68741 -0.0015595 6.57564 0.0197775 6.47117 0.0627757C6.3667 0.105774 6.27163 0.169576 6.19146 0.250478C6.1113 0.33138 6.04765 0.427768 6.0042 0.534046C5.96076 0.640323 5.93839 0.754372 5.93839 0.869569H0.850006C0.737371 0.867939 0.625543 0.889228 0.52102 0.932196C0.416496 0.975165 0.321364 1.03896 0.241149 1.11986C0.160935 1.20077 0.0972393 1.29718 0.0537637 1.40349C0.0102882 1.50981 -0.0121002 1.6239 -0.0121002 1.73913C-0.0121002 1.85437 0.0102882 1.96846 0.0537637 2.07477C0.0972393 2.18108 0.160935 2.2775 0.241149 2.3584C0.321364 2.43931 0.416496 2.5031 0.52102 2.54607C0.625543 2.58904 0.737371 2.61033 0.850006 2.6087H16.15C16.2626 2.61033 16.3745 2.58904 16.479 2.54607C16.5835 2.5031 16.6786 2.43931 16.7589 2.3584C16.8391 2.2775 16.9028 2.18108 16.9462 2.07477C16.9897 1.96846 17.0121 1.85437 17.0121 1.73913C17.0121 1.6239 16.9897 1.50981 16.9462 1.40349C16.9028 1.29718 16.8391 1.20077 16.7589 1.11986C16.6786 1.03896 16.5835 0.975165 16.479 0.932196C16.3745 0.889228 16.2626 0.867939 16.15 0.869569H11.0616C11.0616 0.754372 11.0393 0.640323 10.9958 0.534046C10.9524 0.427768 10.8887 0.33138 10.8085 0.250478C10.7284 0.169576 10.6333 0.105774 10.5288 0.0627757C10.4244 0.0197775 10.3126 -0.0015595 10.2 3.79471e-06H6.80001ZM0.850006 4.34783V18.2609C0.850006 19.2217 1.61076 20 2.55001 20H14.45C15.3893 20 16.15 19.2217 16.15 18.2609V4.34783H0.850006Z\" fill=\"#E60000\"/></g><defs><clipPath id=\"clip0_1_62\"><rect width=\"17\" height=\"20\" fill=\"white\"/></clipPath></defs></svg>"
    listItemWrapper.appendChild(textSpan);
    listItemWrapper.appendChild(button);

    return listItemWrapper;
}

function removeTask(item) {
    const parent = item.parentElement;
    parent.remove();
}

function getSavedTasks() {
    let cookieString = cookieStringGlobal; // тут нужен document.cookie
    if (cookieString.length == 0) { console.log("in saved 0"); return; }
    
    let cookie = cookieString.split(";");
    for (let i = 0; i < cookie.length; i++) {
        let cookieItem = cookie[i].split("=");
        cookieObject[cookieItem[0]] = cookieItem[1];
    }
}

function getNextId() {

}