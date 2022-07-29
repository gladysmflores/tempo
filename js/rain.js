document.getElementById("rainVid").play();
console.log("working");

const startingMinutes = 25;
let time = startingMinutes * 60;

const countdownElement = document.getElementById("countdownTimer");

setInterval(updateCountown, 1000);

function updateCountown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 25 ? : '0' + seconds : seconds;

  countdownEl.innerHTML = '${minutes}:${seconds}';
  time--;
}
