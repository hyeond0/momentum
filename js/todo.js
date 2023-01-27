const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

let toDoArray = [];

const TODOS_KEY = "todos";
function saveToDoArray() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDoArray();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoArray.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDoArray();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
function sayHello() {
  console.log("hello");
}
const savedToDoArray = localStorage.getItem(TODOS_KEY);

if (savedToDoArray) {
  const parsedToDoArray = JSON.parse(savedToDoArray);
  toDoArray = parsedToDoArray;
  parsedToDoArray.forEach(paintToDo);
}
