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
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//set our own date
// let futureDate = new Date(2024, 4, 23, 11, 30, 0);
// console.log(futureDate);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const days = weekdays[futureDate.getDay()];

const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${days}, ${date} ${month} ${year} at ${hours}:${minute}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  //time left in miliseconds
  const t = futureTime - today;

  //get all values from the ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate values
  const day = Math.floor(t / oneDay);
  let secondsLeft = t % oneDay;
  const hour = Math.floor(secondsLeft / oneHour);
  secondsLeft = secondsLeft % oneHour;
  const minutes = Math.floor(secondsLeft / oneMinute);
  const seconds = Math.floor((secondsLeft % oneMinute) / 1000);

  //set values array
  const values = [day, hour, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
