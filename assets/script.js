// Get references to HTML elements
const topBar = document.getElementById("topBar"); // Top bar element
const mainContent = document.getElementById("mainContent"); // Main content element
const startQuiz = document.getElementById("startQuiz"); // Start quiz button element
const timerText = document.getElementById("timer"); // Timer text element
const seccondPhase = document.getElementById("seccondPhase"); // Second phase element
const thirdPhase = document.getElementById("thirdPhase"); // Third phase element
const questions = document.getElementById("answerButtons"); // Questions ul for the quiz
const initialsInput = document.getElementById("initialsInput"); // Initials input element
const submitInitials = document.getElementById("submitInitials"); // Submit initial
const goBack = document.getElementById("goBack"); // Go back button element
const clearHighscore = document.getElementById("clearHighscore"); // Clear highscore button element

let countdown; // Declare countdown variable globally for the timer
var correctAnswer; // Declare correctAnswer variable globally to store correct answers
var incorrectAnswer; // Declare incorrectAnswer variable globally to store incorrect answers
let currentQuestionIndex = 0; // Declare currentQuestionIndex variable to store the current question index
let score = 0; // Declare score variable to store the score of the quiz

// Event listener for the "Start Quiz" button
startQuiz.addEventListener("click", function () {
  countDown(75); // Start the timer with a duration of 75 seconds
  displayPhase2(); // Display the second phase
});

// Function to handle the countdown timer

function countDown(duration) {
  let timer = duration;
  countdown = setInterval(function () {
    timerText.textContent = timer; // Update the timer text content
    timer--;

    // Check if the timer has reached zero
    if (timer < 0) {
      clearInterval(countdown); // Stop the countdown interval
      timerText.textContent = "Time's up!"; // Display a message when time is up
    }
  }, 1000); // Update every 1000 milliseconds (1 second)
}

function displayPhase2() {
  mainContent.setAttribute("style", "display: none;"); // Hide the main content
  seccondPhase.setAttribute("style", "display: flex;"); // Display the second phase
}
