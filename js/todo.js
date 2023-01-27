const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

const toDoArray = [];

function saveToDoArray() {
  localStorage.setItem("todoarray", toDoArray);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDoArray.push(newTodo);
  paintToDo(newTodo);
  saveToDoArray();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
