const apikey = "3be8ba74785c53ea098214d5b3f043fa";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=jammu";
async function checkweather() {
  const response = await fetch(apiurl + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
checkweather();
