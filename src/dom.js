export function displayWeatherData(weatherData){
  const todayDiv = document.querySelector('.today');
  const tempDiv = document.createElement('div');
  const locationDiv = document.createElement('div');
  const windDiv = document.createElement('div');
  
  locationDiv.textContent = `${weatherData.location.name}, ${weatherData.location.region}`
  tempDiv.textContent = `${weatherData}`
}