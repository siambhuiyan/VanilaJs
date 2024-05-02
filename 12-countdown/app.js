const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

//give the current date
//set our own date
let futureDate = new Date(2024, 4, 23, 11, 30, 0);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const days = weekdays[futureDate.getDay()];

const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${days}, ${date} ${month} ${year} at ${hours}:${minute}am`;
