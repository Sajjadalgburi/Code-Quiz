document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const topBar = document.getElementById("topBar"); // Top bar element
  const mainContent = document.getElementById("mainContent"); // Main content element
  const startQuiz = document.getElementById("startQuiz"); // Start quiz button element
  const timerText = document.getElementById("timer"); // Timer text element
  const secondPhase = document.getElementById("secondPhase"); // Second phase element
  const thirdPhase = document.getElementById("thirdPhase"); // Third phase element
  const questions = document.getElementById("answerButtons"); // Questions ul for the quiz
  const initialsInput = document.getElementById("initialsInput"); // Initials input element
  const submitInitials = document.getElementById("submitInitials"); // Submit initial
  const goBackBtn = document.getElementById("goBack"); // Go back button element
  const finalScore = document.getElementById("finalScore");
  const correctIncorrectAnsCheck = document.getElementById(
    "correct-incorrectAnsCheck"
  );
  const lastPhase = document.getElementById("lastPhase");
  const clearHighscoreBtn = document.getElementById("clearHighscore"); // Clear highscore button element
  const inputElement = document.getElementById("myInput");
  const containerHighscore = document.getElementById("container");

  let countdown; // Declare countdown variable globally for the timer
  let currentQuestionIndex = 0; // Declare currentQuestionIndex variable to store the current question index
  let score = 0; // Declare score variable to store the score of the quiz

  let questionNumber = 0;
  let timer; // Initialize the timer variable

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
    // pass info into the coutdown
    timer = duration; // Reference the global timer variable
    countdown = setInterval(function () {
      timerText.textContent = timer; // Update the timer text content
      timer--;

      // Check if the timer has reached zero
      if (timer < 0) {
        clearInterval(countdown); // Stop the countdown interval
        timerText.textContent = "Time's up!"; // Display a message when time is up
        secondPhase.setAttribute("style", "display: none;"); // Display the second phase
        displayPhase3();
      }
    }, 1000); // Update every 1000 milliseconds (1 second)
  }

  function handleWrongAnswer() {
    timer -= 10; // Decrease the timer by 10 seconds
    if (timer < 0) {
      clearInterval(countdown); // Stop the countdown interval
      timerText.textContent = "Time's up!"; // Display a message when time is up
      secondPhase.setAttribute("style", "display: none;"); // Display the second phase
      displayPhase3();
    }
  }

  function displayPhase2() {
    secondPhase.innerHTML = "";
    mainContent.setAttribute("style", "display: none;"); // Hide the main content
    topBar.setAttribute("style", "display: flex;");
    secondPhase.setAttribute("style", "display: flex;"); // Display the second phase

    let h2El = document.createElement("h2"); // <h2></h2>
    // h2El.innerHTML = "Question 1"; // <h2>Question 1</h2>
    h2El.innerHTML = quizQuestions[questionNumber].question;

    let div = document.createElement("div"); // <div> </div>
    div.setAttribute("id", "answerButtons"); // <div id = "answerButtons"> </div>
    div.setAttribute("class", "answerButtons"); // <div id="answerButtons" class="answerButtons"> </div>

    let choices = quizQuestions[questionNumber].choices;

    let lineBreak = document.createElement("hr");

    let correct = document.createElement("p");
    correct.textContent = "Correct!";

    let incorrect = document.createElement("p");
    incorrect.textContent = "Wrong!";

    for (let i = 0; i < choices.length; i++) {
      let button = document.createElement("button"); // <button></button>
      button.innerHTML = choices[i]; // <button>answer 1</button>

      button.addEventListener("click", function (event) {
        event.preventDefault();
        let selectedAns = event.target.innerHTML;
        let correctAnswer = quizQuestions[questionNumber].answer;

        if (selectedAns === correctAnswer) {
          secondPhase.appendChild(lineBreak);
          secondPhase.appendChild(correct);
          score++;
        } else {
          secondPhase.appendChild(lineBreak);
          secondPhase.appendChild(incorrect);
          handleWrongAnswer();
        }

        if (quizQuestions.length - 1 === questionNumber) {
          // secondPhase.innerHTML = "";
          secondPhase.setAttribute("style", "display: none;"); // Display the second phase

          displayPhase3();
        } else if (timer > 0) {
          setTimeout(function () {
            questionNumber += 1;
            displayPhase2();
          }, 1100); // Update every 1000 milliseconds (1 second)
        }
      });
      div.append(button);
    }

    secondPhase.append(h2El); // <div id="secondPhase" class="secondPhase"> <h2>Question 1</h2> </div>
    secondPhase.append(div); // <div id="answerButtons" class="answerButtons"><button>answer 1</button> </div>;
  }

  function displayPhase3() {
    secondPhase.setAttribute("style", "display: none;"); // Display the second phase
    thirdPhase.setAttribute("style", "display: flex;"); // Hide the main content
    finalScore.append(score); // Append the score into the span into #finalScore

    localStorage.setItem("finalScore", score);

    submitInitials.addEventListener("click", function (event) {
      event.preventDefault();

      if (!isNaN(initialsInput.value)) {
        alert("Please enter a valid initials");
      } else {
        var initialsData = initialsInput.value.toUpperCase(); // storing the initials
        // console.log(initialsData);
        localStorage.setItem("initials", initialsData); // storing the initials
        displayPhase4();
      }
    });
  }

  function displayPhase4() {
    thirdPhase.setAttribute("style", "display: none;"); // Display the second phase
    lastPhase.setAttribute("style", "display: block;"); // Hide the main content

    var retrievedInitials = localStorage.getItem("initials");
    var retrievedScore = localStorage.getItem("finalScore");

    inputElement.value = retrievedInitials + " - " + retrievedScore;

    goBackBtn.addEventListener("click", function (event) {
      event.preventDefault();

      lastPhase.innerHTML = "";
      // topBar.setAttribute("style", "display: flex;");
      mainContent.setAttribute("style", "display: flex;"); // Display the second phase
      timerText.textContent = 0;
    });

    clearHighscoreBtn.addEventListener("click", function (event) {
      event.preventDefault();

      inputElement.value = "";
      localStorage.removeItem("finalScore"); // Replace 'userData' with the key you use to store user data
      localStorage.removeItem("initials"); // Replace 'userData' with the key you use to store user data
      lastPhase.setAttribute("style", "display: none;"); // Hide the main content
      mainContent.setAttribute("style", "display: flex;"); // Hide the main content
    });
  }

  // once saved data
  // clear out phase three and show phase 4
  // show phase four
  // get all data from local storage which is saved -> convert to array of objects [{}, {}, {}] using JSON.parse();
  // dynamically create ul and li elements by looping through local storage data (initals, score)

  function startGame() {
    startQuiz.addEventListener("click", function (event) {
      // Prevent the default behavior of the anchor (e.g., navigating to a new page)
      event.preventDefault();

      timer = 75; // Initialize the timer before starting the countdown
      countDown(timer); // Pass the handleWrongAnswer callback
      displayPhase2();
    });
  }

  startGame();
});
