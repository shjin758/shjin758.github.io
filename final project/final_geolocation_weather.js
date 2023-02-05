function onGeoOk(position) {
  //must use"position" to get the location.
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log("You live in", lat, long);

  const myAPI = "6d00b16d4520e7c682ca4c1311f40ed3";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myAPI}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `${data.name},`;

      let weatherType = data.weather[0].main;
      let temperature = Math.trunc(data.main.temp);
      if (weatherType === "Clouds") {
        weather.innerText = `${temperature}° ☁️`;
      } else if (weatherType === "Clear") {
        weather.innerText = `${temperature}° ☀️`;
      } else if (weatherType === "Snow") {
        weather.innerText = `${temperature}° 🌨️`;
      } else if (weatherType === "Drizzle" || weatherType === "Rain") {
        weather.innerText = `${temperature}° 🌧️`;
      } else {
        weather.innerText = `${temperature}° ${data.weather[0].main}`;
      }
    });
}

function onGeoError() {
  alert("Sorry, We can't locate you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
