// setInterval(function (e) {

let secondshand = document.querySelector(".seconds");
let minutehand = document.querySelector(".minute");
let hourhand = document.querySelector(".hour");
function setDate() {
  // const now = new Date();
  let secondsgradus = new Date().getSeconds() * 6;
  secondshand.style.transform = `rotate(${secondsgradus}deg)`;
  secondsgradus += 6;
  //  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

  let minutegradus = new Date().getMinutes();
  let minute = (minutegradus / 60) * 360 + (secondsgradus / 360) * 6;
  minutehand.style.transform = `rotate(${minute}deg)`;
  //
  let hourgradus = new Date().getHours();
  let hour = (hourgradus / 12) * 360 + (minutegradus / 60) * 30;
  hourhand.style.transform = `rotate(${hour}deg)`;
}

setInterval(setDate, 1000);

// setdate();
