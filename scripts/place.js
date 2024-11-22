const today = new Date();
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const temperature = document.querySelector("#temperature");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#windChill");
const windSpeedValue = 17;
const temperatureValue = 61;

currentYear.textContent += today.getFullYear();
lastModified.textContent += document.lastModified;
temperature.textContent = `${temperatureValue} °F`;
wind.textContent = `${windSpeedValue} mph`;
windChill.textContent = calculateWindChill(temperatureValue, windSpeedValue);

function calculateWindChill(temperature, windSpeed) {
  if (temperature > 50 || windSpeed < 3) {
    return "N/A";
  }

  const windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temperature * Math.pow(windSpeed, 0.16);

  return `${windChill.toFixed(2)} °F`;
}
