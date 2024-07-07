window.onload = function(){
  document.querySelector('#input_field').value = '';
}
export function displayWeatherData(weatherData){
  const todayDiv = document.querySelector('#today');
  const tomorrowDiv = document.querySelector('#tomorrow');
  const overmorrowDiv = document.querySelector('#overmorrow');
  
  makeCard(weatherData, todayDiv, 0);
  makeCard(weatherData, tomorrowDiv, 1);
  makeCard(weatherData, overmorrowDiv, 2);
}

export function removeCard(){
  document.querySelector('#today').textContent = '';
  document.querySelector('#tomorrow').textContent = '';
  document.querySelector('#overmorrow').textContent = '';
  
}

function makeCard(weatherData, cardDiv, num){
  const imageDiv = document.createElement('img');
  const maxtempDiv = document.createElement('div');
  const mintempDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const windDiv = document.createElement('div');
  
  const forecast = weatherData.forecast.forecastday;
  const date = new Date(forecast[num].date);
  const options = { month: 'short', day: 'numeric' };
  
  dateDiv.textContent = `${date.toLocaleDateString('en-US', options)}`;
  maxtempDiv.textContent = `Max Temp: ${forecast[num].day.maxtemp_c} °C`;
  mintempDiv.textContent = `Min Temp: ${forecast[num].day.mintemp_c} °C`;
  windDiv.textContent = `Wind Speed: ${forecast[num].day.maxwind_kph} Km/h`;
  imageDiv.src = forecast[num].day.condition.icon;

  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(dateDiv);
  cardDiv.appendChild(maxtempDiv);
  cardDiv.appendChild(mintempDiv);
  cardDiv.appendChild(windDiv);
}