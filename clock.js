let amPm;
function displayDate() {
  const today = new Date();
  const dateDisplay = document.getElementById('date');

  const date = today.getDate();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const day = days[today.getDay()];

  const month = today.getMonth();
  const monthDict = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const year = today.getFullYear();

  const now = `${day}, ${monthDict[month]} ${convertToOrdinal(date)} ${year} `;

  dateDisplay.textContent = now;
}

function displayTime() {
  const timeDisplay = document.getElementById('time');
  const time = new Date();
  let hour = dayNight(time.getHours());
  const minute = addLeadingZero(time.getMinutes());
  const second = addLeadingZero(time.getSeconds());

  const timeString = `${dayNight(hour)}:${minute}:${second} ${amPm}`;

  timeDisplay.textContent = timeString;
}

function convertToOrdinal(number) {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function dayNight(hour) {
  const isAm = hour < 12 || hour === 0;
  amPm = isAm ? 'AM' : 'PM';
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

displayTime();
displayDate();

setInterval(displayTime, 1000);
