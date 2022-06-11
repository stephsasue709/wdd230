const todaysDate = new Date();
const millis = 8640000;
const prevDate = new Date(parseInt(localStorage.getItem('lastVisit')));
​
daysBetweenVisits = Math.floor((todaysDate - prevDate) / millis);
​
let messageDays;
if (daysBetweenVisits >= 1) {
    messageDays = `We are happy to see you back. It has been ${daysBetweenVisits} day(s) since you visited us.`;
}
else {
    messageDays = "Welcome to our gallery 😊! Enjoy your visit."
}
​
document.getElementById("days").innerHTML = messageDays;
​
localStorage.setItem('lastVisit', +todaysDate);