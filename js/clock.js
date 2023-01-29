const clockTime = document.querySelector(".clock-time h2");
const ampm = document.querySelector(".clock-time span");
const clockDate = document.querySelector(".clock-date span");
let nowDate = new Date();

function getClockDate() {
  nowDate = new Date();
  const years = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  const date = nowDate.getDate();
  let day = nowDate.getDay();
  switch (day) {
    case 0:
      day = "(일)";
      break;
    case 1:
      day = "(월)";
      break;
    case 2:
      day = "(화)";
      break;
    case 3:
      day = "(수)";
      break;
    case 4:
      day = "(목)";
      break;
    case 5:
      day = "(금)";
      break;
    case 6:
      day = "(토)";
      break;
    default:
      day = "";
  }
  clockDate.innerText = `${years}년 ${month}월 ${date}일${day}`;
}

function getClockTime() {
  nowDate = new Date();
  let hours = nowDate.getHours();
  if (nowDate.getHours() > 12) {
    ampm.innerText = "오후";
    hours = `${String(nowDate.getHours() - 12).padStart(2, "0")}`;
  } else {
    ampm.innerText = "오전";
    hours = `${String(nowDate.getHours()).padStart(2, "0")}`;
  }
  const minutes = String(nowDate.getMinutes()).padStart(2, "0");
  const seconds = String(nowDate.getSeconds()).padStart(2, "0");
  clockTime.innerText = `${hours}:${minutes}:${seconds}`;

  // 하루가 지날 경우 하루 지난 날짜 출력
  if (hours === "00" && minutes === "00" && seconds === "00") {
    getClockDate();
  }
}

getClockDate();
getClockTime();
setInterval(getClockTime, 1000);
