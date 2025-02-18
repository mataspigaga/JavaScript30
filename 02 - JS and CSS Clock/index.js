const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; // offset the default 90 degree transformation
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90; // offset the default 90 degree transformation
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90; // offset the default 90 degree transformation
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(seconds, minutes, hours);
}
setInterval(setDate, 1000);
