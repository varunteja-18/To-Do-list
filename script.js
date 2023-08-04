const toDoItems = document.getElementsByClassName("to-do-items")[0]; //get access to the to do list container to which we are going to add items
const input = document.getElementById("input");//get access to input box container
const trashIcon = document.getElementById("trash");//get access to trash after an item is added 

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")//when the user clicks submit button additem is called and item is added to the to-do-list container
     addItem();
})

function addItem(){
    var divParent = document.createElement("div");//access for added elements
    var divChild = document.createElement("div");//access for tick,trash on added elements
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";//create check icon
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color = "limegreen";//green color on clicking the icon
    })

    divChild.appendChild(checkIcon);//checkicon added to child div

    trashIcon.className = "fas fa-trash";//create a trash icon
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();//remove item on clicking the icon
    })

    divChild.appendChild(trashIcon);//trash icon added to child div

    divParent.appendChild(divChild);//whole child div is added into parent div

    toDoItems.appendChild(divParent);//the added item div is placed inside main to-do-list container

    input.value = '';//clear the input field
}
