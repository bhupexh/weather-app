import './input.css';
import { displayWeatherData, removeCard } from './dom';

const weatherURL = "https://api.weatherapi.com/v1/forecast.json?key=7c344d43905a4e4baa290625242005";

async function getWeatherData(location){
  location = location || localStorage.getItem('location') || 'New Delhi';
  const query = `${weatherURL}&q=${location}&days=3`;
  const response = await fetch(query, {mode: "cors"});
  const weatherData = await response.json();

  if(weatherData.error){
    document.querySelector('#input_field').value = 'Please Enter a valid location';
    return;
  }

  localStorage.setItem('location', location);
  removeCard();
  console.log(weatherData);
  displayWeatherData(weatherData);
}

const form = document.querySelector("#search");
form.addEventListener('submit', function(event){
  event.preventDefault();

  const location = document.querySelector('#input_field').value;
  getWeatherData(location);
})

getWeatherData();