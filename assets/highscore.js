// function highScore() {
//   var myAnchor = document.getElementById("myAnchor");

//   var retrievedInitials = localStorage.getItem("initials");
//   var retrievedScore = localStorage.getItem("finalScore");

//   myAnchor.addEventListener("click", function (event) {
//     // Prevent the default behavior of the anchor (e.g., navigating to a new page)
//     event.preventDefault();

//     // Your custom code here
//     alert("Anchor clicked!");
//   });

//   var appendHighscore = document.getElementById("appendHighscore");
//   var orderedListEl = document.createElement("ol");

//   for (let i = 0; i < 6; i++) {
//     var listItemEl = document.createElement("li");
//     orderedListEl.appendChild(listItemEl);
//   }

//   appendHighscore.appendChild(orderedListEl);
// }

// highScore();

// var test = document.getElementById("appendHighscore");

// console.log(test);
