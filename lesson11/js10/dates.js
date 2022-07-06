// declare and instantiate a variable to hold the current year
const currentYear = 2022;


//current date
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
}).format(now);
// datefield.innerHTML = `<em>${fulldate}</em>`;
datefield.innerHTML = fulldate;



// place the value of the current year variable into the HTML file
document.querySelector("#copyrightyear").textContent = currentYear;

var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
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
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();

var today = " Last Updated: " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
document.querySelector("#modify").textContent = today;

const d = new Date();
const weekD = d.getDay();

if(weekD==5){
  document.querySelector(".banner").style.display="block";
}