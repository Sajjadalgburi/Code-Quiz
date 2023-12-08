// const appendHighscoreEl = document.getElementById("appendHighscore");

// // Step 1: Get data from local storage
// const retrievedInitials = localStorage.getItem("initials");
// const retrievedScore = localStorage.getItem("finalScore");

// // Parse the retrieved data
// const initialsArray = JSON.stringify(retrievedInitials);
// const scoreArray = JSON.stringify(retrievedScore);

// // Create an array of objects
// const dataArray = [];

// for (let i = 0; i < initialsArray.length; i++) {
//   const dataObject = {
//     initials: initialsArray[i],
//     score: scoreArray[i],
//   };

//   dataArray.push(dataObject);
// }

// // Loop through the array of objects
// dataArray.forEach((item) => {
//   // Create a list item for each object
//   const listItem = document.createElement("li");
//   listItem.textContent = `${item.initials}: ${item.score}`;

//   // Append the list item to a parent element (e.g., a <ul> element)
//   appendHighscoreEl.appendChild(listItem);
// });
