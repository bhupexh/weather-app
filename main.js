"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/input.css":
/*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayWeatherData: () => (/* binding */ displayWeatherData),
/* harmony export */   removeCard: () => (/* binding */ removeCard)
/* harmony export */ });
function displayWeatherData(weatherData){
  const todayDiv = document.querySelector('#today');
  const tomorrowDiv = document.querySelector('#tomorrow');
  const overmorrowDiv = document.querySelector('#overmorrow');
  
  document.querySelector('#input_field').value = `${weatherData.location.name}, ${weatherData.location.region}`;
  document.querySelector('#current').innerHTML = `Current temp: ${weatherData.current.temp_c} °C<br>Feels like: ${weatherData.current.feelslike_c} °C`
  makeCard(weatherData, todayDiv, 0);
  makeCard(weatherData, tomorrowDiv, 1);
  makeCard(weatherData, overmorrowDiv, 2);
}

function removeCard(){
  document.querySelector('#today').textContent = '';
  document.querySelector('#tomorrow').textContent = '';
  document.querySelector('#overmorrow').textContent = '';
  
}

function makeCard(weatherData, cardDiv, num){
  const weatherIcon = document.createElement('img');
  const imageDiv = document.createElement('div');
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
  weatherIcon.src = forecast[num].day.condition.icon;

  imageDiv.classList = 'overflow-hidden flex justify-start items-center';
  imageDiv.appendChild(weatherIcon);
  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(dateDiv);
  cardDiv.appendChild(maxtempDiv);
  cardDiv.appendChild(mintempDiv);
  cardDiv.appendChild(windDiv);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.css */ "./src/input.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



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
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeCard)();
  console.log(weatherData);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayWeatherData)(weatherData);
}

const form = document.querySelector("#search");
form.addEventListener('submit', function(event){
  event.preventDefault();

  const location = document.querySelector('#input_field').value;
  getWeatherData(location);
})

getWeatherData();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDBCQUEwQixJQUFJLDRCQUE0QjtBQUM5RyxrRUFBa0UsNEJBQTRCLG9CQUFvQixpQ0FBaUM7QUFDbko7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsMkJBQTJCLDBDQUEwQztBQUNyRSx3Q0FBd0MsNkJBQTZCO0FBQ3JFLHdDQUF3Qyw2QkFBNkI7QUFDckUsdUNBQXVDLCtCQUErQjtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNxQjtBQUNrQzs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixXQUFXLEtBQUssU0FBUztBQUM1Qyx1Q0FBdUMsYUFBYTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsZ0RBQVU7QUFDWjtBQUNBLEVBQUUsd0RBQWtCO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2lucHV0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSl7XG4gIGNvbnN0IHRvZGF5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG4gIGNvbnN0IHRvbW9ycm93RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93Jyk7XG4gIGNvbnN0IG92ZXJtb3Jyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Zlcm1vcnJvdycpO1xuICBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0X2ZpZWxkJykudmFsdWUgPSBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb259YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQnKS5pbm5lckhUTUwgPSBgQ3VycmVudCB0ZW1wOiAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jfSDCsEM8YnI+RmVlbHMgbGlrZTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgXG4gIG1ha2VDYXJkKHdlYXRoZXJEYXRhLCB0b2RheURpdiwgMCk7XG4gIG1ha2VDYXJkKHdlYXRoZXJEYXRhLCB0b21vcnJvd0RpdiwgMSk7XG4gIG1ha2VDYXJkKHdlYXRoZXJEYXRhLCBvdmVybW9ycm93RGl2LCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhcmQoKXtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5JykudGV4dENvbnRlbnQgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93JykudGV4dENvbnRlbnQgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJtb3Jyb3cnKS50ZXh0Q29udGVudCA9ICcnO1xuICBcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmQod2VhdGhlckRhdGEsIGNhcmREaXYsIG51bSl7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1heHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWludGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gIGNvbnN0IGZvcmVjYXN0ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdFtudW1dLmRhdGUpO1xuICBjb25zdCBvcHRpb25zID0geyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfTtcbiAgXG4gIGRhdGVEaXYudGV4dENvbnRlbnQgPSBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKX1gO1xuICBtYXh0ZW1wRGl2LnRleHRDb250ZW50ID0gYE1heCBUZW1wOiAke2ZvcmVjYXN0W251bV0uZGF5Lm1heHRlbXBfY30gwrBDYDtcbiAgbWludGVtcERpdi50ZXh0Q29udGVudCA9IGBNaW4gVGVtcDogJHtmb3JlY2FzdFtudW1dLmRheS5taW50ZW1wX2N9IMKwQ2A7XG4gIHdpbmREaXYudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHtmb3JlY2FzdFtudW1dLmRheS5tYXh3aW5kX2twaH0gS20vaGA7XG4gIHdlYXRoZXJJY29uLnNyYyA9IGZvcmVjYXN0W251bV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gIGltYWdlRGl2LmNsYXNzTGlzdCA9ICdvdmVyZmxvdy1oaWRkZW4gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlcic7XG4gIGltYWdlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChpbWFnZURpdik7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQobWF4dGVtcERpdik7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQobWludGVtcERpdik7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQod2luZERpdik7XG59IiwiaW1wb3J0ICcuL2lucHV0LmNzcyc7XG5pbXBvcnQgeyBkaXNwbGF5V2VhdGhlckRhdGEsIHJlbW92ZUNhcmQgfSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IHdlYXRoZXJVUkwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTdjMzQ0ZDQzOTA1YTRlNGJhYTI5MDYyNTI0MjAwNVwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbil7XG4gIGxvY2F0aW9uID0gbG9jYXRpb24gfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykgfHwgJ05ldyBEZWxoaSc7XG4gIGNvbnN0IHF1ZXJ5ID0gYCR7d2VhdGhlclVSTH0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHF1ZXJ5LCB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYod2VhdGhlckRhdGEuZXJyb3Ipe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dF9maWVsZCcpLnZhbHVlID0gJ1BsZWFzZSBFbnRlciBhIHZhbGlkIGxvY2F0aW9uJztcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYXRpb24nLCBsb2NhdGlvbik7XG4gIHJlbW92ZUNhcmQoKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xufVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dF9maWVsZCcpLnZhbHVlO1xuICBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG59KVxuXG5nZXRXZWF0aGVyRGF0YSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==