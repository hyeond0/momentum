const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector(".clock");
const toDo = document.querySelector(".todo");
const mainBody = document.querySelector(".main-body");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  clock.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요, ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  setTimeout(() => {
    ShowTodo();
  }, 3000);
}

function ShowTodo() {
  clock.classList.remove(HIDDEN_CLASSNAME);
  toDo.classList.remove(HIDDEN_CLASSNAME);
  mainBody.classList.add("row");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
