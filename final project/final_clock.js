const dates = document.querySelector("#date");
const clock = document.querySelector("#clock");

function getDate() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dateNumber = String(date.getDate()).padStart(2, "0");
  //const dayWord = String(date.getDay());
  dates.innerText = `${year}-${month}-${dateNumber}`;
}

function getClock() {
  const time = new Date();

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getDate();
getClock();
setInterval(getDate, 60000);
setInterval(getClock, 60000);
