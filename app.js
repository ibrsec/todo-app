const input = document.querySelector("#new-task-input");
const addBtn = document.querySelector("form button");
const itemContainer = document.querySelector("#tasks-list");
const deleteBtn = document.querySelector(".delete-btn");
const taskItems = document.querySelectorAll(".task-item");


//stoarge process
const saveData = ()=>{
    localStorage.setItem("data",itemContainer.innerHTML);
}
const getData = ()=>{
    itemContainer.innerHTML = localStorage.getItem("data");
}

//first ffocu of inputbox
document.querySelector("body").onload = () => {
  input.focus();
};

//btn click event
addBtn.onclick = (e) => {
  e.preventDefault();

  input.focus();
  if (!input.value.trim()) {
    alert("Input box is empty!!");
    return;
  }

  console.log(input.value);

  let li = document.createElement("li");
  let taskText = document.createTextNode(input.value.trim());
  li.appendChild(taskText);
  li.classList.add("task-item");

  let button = document.createElement("button");
  button.classList.add("delete-btn");
  let deleteXText = document.createTextNode("✕");
  button.appendChild(deleteXText);
  li.appendChild(button);
  itemContainer.appendChild(li);
  input.value = "";
  saveData();

};

//add task enter event
input.onkeydown = (e) => {
  if (e.keyCode == 13) {
    addBtn.click();
  }
  if (e.keyCode == 46) {
    if (itemContainer.lastElementChild) {
      itemContainer.lastElementChild.remove();
    } else {
      alert("There is no task!!");
    }
  }
};
 

//delete task with button event
itemContainer.addEventListener("click",(e) => {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("done");
        
  } else if (e.target.className == "delete-btn") {
    e.target.parentNode.remove();
  }
  saveData();
},false);


getData();


