document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const sumBtn = document.querySelector("#create-task-form > input:last-child")
  // console.log(sumBtn)
// const btn = document.querySelector("#btn")


sumBtn.addEventListener("click", function (e){
    e.preventDefault()
    console.log(e)
    //What do we want to add to the DOM
const listItem = document.createElement("li")
  //Where do we want the todo to be added
const task = document.querySelector("#tasks")
  //Set the value to the input box
  const newTask = document.querySelector("#new-task-description").value
  console.log(newTask)
  listItem.textContent = newTask
  //Add the item to the DOM
 task.appendChild(listItem)
 })
    
  
});
