const button = document.getElementById("clickButton");
button.addEventListener("click", function () {
  const cityName = document.getElementById("inputCityName").value;
  fetchDataFromUrl(cityName);
});
// weatherApp function
const fetchDataFromUrl = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b0f3a1e2cf63da18a8d4458b29a9d983`;
  const response = await fetch(url);
  const data = await response.json();

  //convert fahrenite to celcius
  const celsius = fahrenheitToCelsius(data.main.temp);

  //function for fahrenite to celcius
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return parseInt(celsius);
  }

  document.getElementById("city").innerHTML = "weather in " + data.name;
  document.getElementById("temp").innerHTML = celsius + "°C";
  document.getElementById(
    "icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  document.getElementById("windSpeed").innerHTML =
    "wind speed" + data.wind.speed + "km/h";
  document.getElementById("cloudy").innerHTML = data.weather[0].description;
  document.getElementById("sunrise").innerHTML =
    "sunrise is : " + new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  document.getElementById("sunset").innerHTML =
    "sunset is : " + new Date(data.sys.sunset * 1000).toLocaleTimeString();
  const mapUrl = `https://maps.google.com/maps?q=${data.name}&hl=es&z=14&output=embed`;
  console.log(data.name);
  document.getElementById(
    "cityMap"
  ).innerHTML = `<iframe src="${mapUrl}"></iframe>`;
};
