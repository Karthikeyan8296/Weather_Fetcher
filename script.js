async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const output = document.getElementById("weatherResult");

  if (!city) {
    output.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiKey = "9540ab8554074f66864143253251307";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const location = `${data.location.name}, ${data.location.country}`;
    const temp = `${data.current.temp_c}°C`;
    const condition = data.current.condition.text;

    output.innerHTML = `
      <h3>${location}</h3>
      <p><strong>Temperature:</strong> ${temp}</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
  } catch (error) {
    output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
