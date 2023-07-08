
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showMyPosition)
// } else {
//     alert("Location Denied By Browser")
// }


// function showMyPosition(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     document.write("LAT:",latitude)
//     console.log("LON:",longitude)
// }

const btn = document.getElementById("getButton")
inputBox=document.getElementById("cityInput")
inputBox.addEventListener("keypress", getWeather)

btn.addEventListener("click", getWeatherBtn)

function getWeather(e) {
  if(e.key==='Enter'){
    let city = document.getElementById('cityInput').value;
    let apiKey = '880d40686e93413584c161240220706'; 
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
      .then(res => res.json())
      .then(data => {
        let weatherInfo = document.getElementById('weatherInfo');
        cityNtime.innerHTML = `
        <p>${data.location.name}, ${data.location.country}</p>
        <p>${data.location.localtime} </p>
        `
        weatherInfo.innerHTML = `
          <h2>${data.location.name}</h2>
          <img id="icon" src=${data.current.condition.icon} alt="weatherIcon"/>
          <p>Temperature: ${(Math.round(data.current.temp_c))}°C | ${data.current.temp_f}°F</p>
          <p>Humidity: ${data.current.humidity}%</p>
          <p>Description: ${data.current.condition.text}</p>
          

      `;
      cityInput.value='';
    }).catch(error=>
      alert("Error: No such city found"))
  }   
}

function getWeatherBtn(){
  let city = document.getElementById('cityInput').value;
  let apiKey = '880d40686e93413584c161240220706'; 
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
    .then(res => res.json())
    .then(data => {
      let weatherInfo = document.getElementById('weatherInfo');
      cityNtime.innerHTML = `
      <p>${data.location.name}, ${data.location.country}</p>
      <p>${data.location.localtime} </p>
      `
      weatherInfo.innerHTML = `
        <h2>${data.location.name}</h2>
        <img id="icon" src=${data.current.condition.icon} alt="weatherIcon"/>
        <p>Temperature: ${(Math.round(data.current.temp_c))}°C | ${data.current.temp_f}°F</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Description: ${data.current.condition.text}</p>

    `;
    cityInput.value='';
  }).catch(error=>
    alert("Error: No such city found"))
}