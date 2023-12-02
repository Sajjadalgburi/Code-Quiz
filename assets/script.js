const topBar = document.getElementById("topBar");
const mainContent = document.getElementById("mainContent");
const startQuiz = document.getElementById("startQuiz");
const timerText = document.getElementById("timer");
let countdown; // Declare countdown variable globally

startQuiz.addEventListener("click", function () {
  countDown(75); // Start the timer with a duration of 75 seconds
});

function countDown(duration) {
  let timer = duration;
  countdown = setInterval(function () {
    timerText.textContent = timer;
    timer--;

    if (timer < 0) {
      clearInterval(countdown);
      timerText.textContent = "Time's up!";
    }
  }, 1000);
}
