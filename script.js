async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = '116efbf7d6b33328b666b9099a151afe'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("condition").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;

    document.getElementById("weatherBox").style.display = 'block';
  } catch (error) {
    alert(error.message);
    document.getElementById("weatherBox").style.display = 'none';
  }
}
