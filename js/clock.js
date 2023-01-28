const clock = document.querySelector("#clock h2");
const ampm = document.querySelector("#clock span");
function getClock() {
  const date = new Date();
  let hours = date.getHours();
  if (date.getHours() > 12) {
    ampm.innerText = "오후";
    hours = `${String(date.getHours() - 12).padStart(2, "0")}`;
  } else {
    ampm.innerText = "오전";
    hours = `${String(date.getHours()).padStart(2, "0")}`;
  }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
