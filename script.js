const theme = {
    Gradient : "https://images.alphacoders.com/102/thumb-1920-1026345.jpg",
    NY: "https://images6.alphacoders.com/485/thumb-1920-485875.jpg",
    Edin: "https://images4.alphacoders.com/931/thumb-1920-931585.jpg",
    Mountains: "https://images8.alphacoders.com/544/thumb-1920-544215.jpg",
}

const them = document.getElementById("theme");
const reset = document.getElementById("resetbtn");
const start = document.getElementById("start");


them.addEventListener("change", ()=>{
    const choice = theme[them.value];
    document.body.style.backgroundImage = `url(${choice})`;
});

let timeLeft = 25 * 60;
let timerDisplay = document.getElementById("time");
let intervalId;

function startTimer() {
    // if(intervalId) return;
  intervalId = setInterval(() => {
    timeLeft--;

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Add leading zero if needed
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (timeLeft === 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}

start.addEventListener("click", ()=>{
  if (start.textContent === "Start") {
    startTimer();
    start.textContent = "Pause";
  }
  else{
    clearInterval(intervalId)
    start.textContent = "Start";

  }
})

reset.addEventListener("click", ()=>{
    clearInterval(intervalId);
    intervalId = null;
    timeLeft = 25*60;
    minutes = 25;
    seconds = 0;
    timerDisplay.textContent = `${minutes}:0${seconds}`;
    start.textContent = "Start";
})