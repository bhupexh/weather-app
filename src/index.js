import './input.css';
import { displayWeatherData } from './dom';

const url = "https://api.weatherapi.com/v1/forecast.json?key=7c344d43905a4e4baa290625242005&q=Sonipat&days=3";

async function getWeatherData(){
  const response = await fetch(url, {mode: "cors"});
  const weatherData = await response.json();
  console.log(weatherData);
  // printWeatherData(weatherData);
  displayWeatherData(weatherData);
}

function printWeatherData(weatherData){
  const forecast = weatherData.forecast.forecastday;

  console.log(`Weather of ${weatherData.location.name}, ${weatherData.location.region} \n`);
  console.log(`Feels like: ${weatherData.current["feelslike_c"]}`);
  console.log(`Current Temperature: ${weatherData.current["temp_c"]}`);
  console.log(`${forecast[0].date}'s max temp: ${forecast[0].day["maxtemp_c"]}`);
  console.log(`${forecast[0].date}'s min temp: ${forecast[0].day["mintemp_c"]}`);
  console.log(`${forecast[1].date}'s max temp: ${forecast[0].day["maxtemp_c"]}`);
  console.log(`${forecast[1].date}'s min temp: ${forecast[0].day["mintemp_c"]}`);
  console.log(`${forecast[2].date}'s max temp: ${forecast[0].day["maxtemp_c"]}`);
  console.log(`${forecast[2].date}'s min temp: ${forecast[0].day["mintemp_c"]}`);
}

getWeatherData();