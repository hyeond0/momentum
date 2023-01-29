const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");
const colorArray = ["#fff5b1", "#ffdce0", "#dcffe4", "#f5f0ff"];
let toDoArray = [];
let colorCount = 0;
let toDoCount = 0;
const TODOS_KEY = "todos";
function saveToDoArray() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function checkToDo(event) {
  const span = event.target.nextElementSibling;
  const check = event.target.previousElementSibling;
  if (!check.checked) {
    span.style.textDecoration = "line-through";
    span.style.textDecorationColor = "rgba(0,0,0,0.4)";
  } else {
    span.style.textDecoration = "none";
  }
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDoArray();
  toDoCount = toDoCount - 1;
}
function paintToDo(newTodo) {
  const checkBox = document.createElement("input");
  const checkBoxLabel = document.createElement("label");
  toDoCount = toDoCount + 1;
  checkBox.id = `check${toDoCount}`;
  checkBox.type = "checkbox";
  checkBoxLabel.htmlFor = `check${toDoCount}`;
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  if (colorCount < colorArray.length) {
    span.style.backgroundColor = colorArray[colorCount];
    colorCount = colorCount + 1;
  } else {
    colorCount = 0;
    span.style.backgroundColor = colorArray[colorCount];
    colorCount = colorCount + 1;
  }

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  checkBoxLabel.addEventListener("click", checkToDo);
  li.appendChild(checkBox);
  li.appendChild(checkBoxLabel);
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
