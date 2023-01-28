const API_KEY = "bf8c3134ef3b94b56d07f4dcb204b6c2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const currentWeather = translateWeather(data.weather[0].main);
      city.innerText = data.name;
      weather.innerText = `${currentWeather} / ${data.main.temp}°C,`;
    });
}

function translateWeather(weather) {
  if (weather === "Thunderstorm") {
    return "천둥번개";
  } else if (weather === "Drizzle") {
    return "소나기";
  } else if (weather === "Rain") {
    return "비";
  } else if (weather === "Snow") {
    return "눈";
  } else if (weather === "Clear") {
    return "맑음";
  } else if (weather === "Mist") {
    return "얕은 안개";
  } else if (weather === "Clouds") {
    return "구름많음";
  } else if (weather === "Smoke") {
    return "스모그";
  } else if (weather === "Haze") {
    return "안개";
  } else if (weather === "Dust") {
    return "황사";
  } else if (weather === "Fog") {
    return "짙은 안개";
  } else if (weather === "Sand") {
    return "황사";
  } else if (weather === "Ash") {
    return "잿빛";
  } else if (weather === "Squall") {
    return "강풍";
  } else if (weather === "Tornado") {
    return "태풍";
  } else {
    return "날씨 불러오기 오류";
  }
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
