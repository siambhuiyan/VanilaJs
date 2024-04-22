const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//element by id to select the id from the html
const btn = document.getElementById("btn");
//To select class or other selectors
const color = document.querySelector(".color");

// Generate random number to prevent repeat color
// let previousRandomNumber = null;
// let randomNumber;
// function generateRandomNumber() {
//   // Generate a random number between 0 and 3 (inclusive of 3)
//   randomNumber = Math.floor(Math.random() * 4);

//   // Check if the new random number is the same as the previous one
//   if (randomNumber === previousRandomNumber) {
//     // If it's the same, generate a new random number until it's different
//     while (randomNumber === previousRandomNumber) {
//       randomNumber = Math.floor(Math.random() * 4);
//     }
//   }

//   // Update the previous random number
//   previousRandomNumber = randomNumber;

//   return randomNumber;
// }

//change the background when clicked

btn.addEventListener("click", function () {
  //Document.body allow us ot access and manipulate the content within the <body> tag
  console.log(document.body);

  //Get random number between 0-3 to access from colors list or array
  const randomNumber = Math.floor(Math.random() * 4);
  document.body.style.backgroundColor = colors[getRandomNumber()];
  color.textContent = colors[getRandomNumber()];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
