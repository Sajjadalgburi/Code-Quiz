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
const finalScore = document.getElementById("finalScore");
const correctInccorectAnsCheck = document.getElementById(
  "correct-inccorectAnsCheck"
);

let countdown; // Declare countdown variable globally for the timer
var correctAnswer; // Declare correctAnswer variable globally to store correct answers
var incorrectAnswer; // Declare incorrectAnswer variable globally to store incorrect answers
let currentQuestionIndex = 0; // Declare currentQuestionIndex variable to store the current question index
let score = 0; // Declare score variable to store the score of the quiz

let questionNumber = 0;

const quizQuestions = [
  {
    question: "What is DOM",
    choices: [
      "Document Object Model",
      "Dynamic Operator Management",
      "Cascading Style Sheets",
      "Mono Object Manuplation",
    ],
    answer: "Document Object Model",
  },
  {
    question: "A function in JS always needs to do what?",
    choices: [
      "Check validation",
      "execute the function",
      "Carry out a function",
      "Return something",
    ],
    answer: "Return something",
  },
  {
    question: "Which company developed JavaScript?",
    choices: ["Google", "Netscape", "Microsoft", "ME"],
    answer: "Netscape",
  },
  {
    question: "All these are variables in JS EXCEPT?",
    choices: ["int", "const", "let", "var"],
    answer: "int",
  },
  {
    question: "What does the 'typeof' operator in JavaScript do?",
    choices: [
      "Returns the data type of a variable",
      "Checks if a variable is defined",
      "Concatenates two strings",
      "Compares two values",
    ],
    answer: "Returns the data type of a variable",
  },
  {
    question: "Which function is used to print output in the console?",
    choices: ["print()", "log()", "display()", "output()"],
    answer: "log()",
  },
  {
    question: "What is the purpose of the 'parseInt()' function?",
    choices: [
      "Converts a string to an integer",
      "Calculates the square root of a number",
      "Concatenates two strings",
      "Returns the length of a string",
    ],
    answer: "Converts a string to an integer",
  },
  {
    question: "How do you declare a function in JavaScript?",
    choices: [
      "function myFunction()",
      "var myFunction()",
      "def myFunction()",
      "void myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "What does the 'return' statement do in a function?",
    choices: [
      "Stops the execution of the function",
      "Declares a variable",
      "Specifies the data type of a variable",
      "Specifies the value to be returned from the function",
    ],
    answer: "Specifies the value to be returned from the function",
  },
  {
    question: "What is the purpose of the 'Array.map()' method?",
    choices: [
      "Filters elements in an array",
      "Creates a new array with the results of calling a provided function on every element",
      "Sorts the elements of an array",
      "Adds new elements to an array",
    ],
    answer:
      "Creates a new array with the results of calling a provided function on every element",
  },
  {
    question: "Which statement is used to handle exceptions in JavaScript?",
    choices: ["try", "catch", "finally", "all of the above"],
    answer: "all of the above",
  },
  {
    question: "What is the 'this' keyword in JavaScript?",
    choices: [
      "Refers to the current function",
      "Refers to the global object",
      "Refers to the object on which the method is invoked",
      "Refers to a specific variable",
    ],
    answer: "Refers to the object on which the method is invoked",
  },
];

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
  seccondPhase.innerHTML = "";
  mainContent.setAttribute("style", "display: none;"); // Hide the main content
  seccondPhase.setAttribute("style", "display: flex;"); // Display the second phase

  let h2El = document.createElement("h2"); // <h2></h2>
  // h2El.innerHTML = "Question 1"; // <h2>Question 1</h2>
  h2El.innerHTML = quizQuestions[questionNumber].question;

  let div = document.createElement("div"); // <div> </div>
  div.setAttribute("id", "answerButtons"); // <div id = "answerButtons"> </div>
  div.setAttribute("class", "answerButtons"); // <div id="answerButtons" class="answerButtons"> </div>

  let choices = quizQuestions[questionNumber].choices;
  // console.log(choices);

  for (let i = 0; i < choices.length; i++) {
    let button = document.createElement("button"); // <button></button>
    button.innerHTML = choices[i]; // <button>answer 1</button>
    button.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(event.target.innerHTML);
      let selectedAns = event.target.innerHTML;
      // if statment
      let correctAnswer = quizQuestions[questionNumber].answer;
      if (selectedAns === correctAnswer) {
        var lineBreak = document.createElement("hr");
        var correct = document.createElement("p");
        correct.innerHTML = "Correct!";
        correctInccorectAnsCheck.append(lineBreak); // <div id="correct-inccorectAnsCheck"><hr></div>
        correctInccorectAnsCheck.append(correct);
        seccondPhase.append(lineBreak);
        seccondPhase.append(correct);
        questionNumber += 1;
        score++;
        displayPhase2();
      } else {
        var lineBreak = document.createElement("hr");
        var incorrect = document.createElement("p");
        incorrect.innerHTML = "Wrong!";
        correctInccorectAnsCheck.append(lineBreak); // <div id="correct-inccorectAnsCheck"><hr></div>
        correctInccorectAnsCheck.append(incorrect);
        seccondPhase.append(lineBreak);
        seccondPhase.append(incorrect);
        questionNumber += 1;
        displayPhase2();
      }
    });
    div.append(button);
  }

  seccondPhase.append(h2El); // <div id="seccondPhase" class="seccondPhase"> <h2>Question 1</h2> </div>
  seccondPhase.append(div); // <div id="answerButtons" class="answerButtons"><button>answer 1</button> </div>;
}

// function displayPhase3() {
//   thirdPhase.setAttribute("style", "display: flex;"); // Display the third phase
//   seccondPhase.innerHTML = "";
// }

// function insertValidation() {
//   if (selectedAns === correctAnswer) {
//     var lineBreak = document.createElement("hr");
//     var correct = document.createElement("p");
//     correct.innerHTML = "Correct!";
//     correctInccorectAnsCheck.append(lineBreak); // <div id="correct-inccorectAnsCheck"><hr></div>
//     correctInccorectAnsCheck.append(correct);
//     seccondPhase.append(lineBreak);
//     seccondPhase.append(correct);
//   } else {
//     var lineBreak = document.createElement("hr");
//     var incorrect = document.createElement("p");
//     incorrect.innerHTML = "Wrong!";
//     correctInccorectAnsCheck.append(lineBreak); // <div id="correct-inccorectAnsCheck"><hr></div>
//     correctInccorectAnsCheck.append(incorrect);
//     seccondPhase.append(lineBreak);
//     seccondPhase.append(incorrect);
//   }
// }

// Event listener for the "Start Quiz" button
startQuiz.addEventListener("click", function () {
  countDown(75); // Start the timer with a duration of 75 seconds
  displayPhase2(); // Display the second phase
  displayPhase3();
});
