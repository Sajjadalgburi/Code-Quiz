// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("appendHighscore");

//   // Retrieve existing high scores from local storage or initialize an empty array
//   const existingHighScores =
//     JSON.parse(localStorage.getItem("highScores")) || [];

//   // Retrieve the user's latest score from local storage
//   const userScore = {
//     initials: localStorage.getItem("initials") || "",
//     score: parseInt(localStorage.getItem("finalScore")) || 0,
//   };

//   // Check if the user has played (valid initials and score greater than 0)
//   if (userScore.initials && userScore.score > 0) {
//     // Check if the user's score is not already in the existing high scores
//     const userAlreadyInHighScores = existingHighScores.some(
//       (score) =>
//         score.initials === userScore.initials && score.score === userScore.score
//     );

//     if (!userAlreadyInHighScores) {
//       // Add the user's latest score to the existing high scores
//       existingHighScores.push(userScore);
//     }
//   }

//   // Sort high scores in descending order based on the score
//   existingHighScores.sort((a, b) => b.score - a.score);

//   // Save the updated high scores back to local storage
//   localStorage.setItem("highScores", JSON.stringify(existingHighScores));

//   // Loop through the sorted high scores and append them to the container
//   for (let i = 0; i < existingHighScores.length; i++) {
//     let scoreItem = document.createElement("p");
//     scoreItem.textContent = `${existingHighScores[i].initials} - ${existingHighScores[i].score}`;
//     container.appendChild(scoreItem);
//   }
// });
