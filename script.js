const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const dateElement = document.getElementById("date");
const targetDate = new Date(2024, 7, 9);

// update the current date
const formattedDate = formatDate(new Date());
dateElement.textContent = formattedDate;

// format given date to 'Day, Date Month Year' format
function formatDate(date) {
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return `${day}, ${dayOfMonth} ${month} ${year}`;
}

// calculate remaining days, hours, minutes and seconds
function calculateRemainingTime() {
  const today = new Date();
  const timeDifference = targetDate - today;
  const msPerSec = 1000;
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerHour = 1000 * 60 * 60;
  const msPerMinute = 1000 * 60;

  const days = Math.floor(timeDifference / msPerDay);
  const hours = Math.floor((timeDifference % msPerDay) / msPerHour);
  const minutes = Math.floor((timeDifference % msPerHour) / msPerMinute);
  const seconds = Math.floor((timeDifference % msPerMinute) / msPerSec);

  return { days, hours, minutes, seconds };
}

// update the remaining time
function updateTime() {
  const timeRemaining = calculateRemainingTime();
  daysElement.textContent = timeRemaining.days;
  hoursElement.textContent = timeRemaining.hours.toString().padStart(2, "0");
  minutesElement.textContent = timeRemaining.minutes
    .toString()
    .padStart(2, "0");
  secondsElement.textContent = timeRemaining.seconds
    .toString()
    .padStart(2, "0");
}

setInterval(updateTime, 1000);
