function cityApiSearch(city){
    let apiKey = "32669c9d2438b0a7d99b979086328197";
      let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(temperature);
      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(forecast);
}
 function forecast(response){
     let forecastDisplay=null;
     let forecastElement = document.querySelector("#displayforecast");
        forecastElement.innerHTML = null;

    console.log(response.data.list[0]);
     for (let i = 0; i < 6; i++) {
         forecastDisplay= (response.data.list[i]);
             forecastElement.innerHTML += `<div class="col-2" >
              <div>
                <h7>${dailyForecast(forecastDisplay.dt*1000)}</h7> </br>
                <img src="http://openweathermap.org/img/wn/${forecastDisplay.weather[0].icon}@2x.png" alt=""/></br>
                <div>
                <strong> ${Math.round(forecastDisplay.main.temp_max)}°| ${Math.round(forecastDisplay.main.temp_min)}°</strong>
              </div>
              </div>
            </div>`;
    
         
     }
 }
let form = document.querySelector("#form-input");
form.addEventListener("submit",citySearch);
cityApiSearch("New york");
function citySearch(event){
    event.preventDefault();
    let cityNameElement = document.querySelector("#cityCalling");
    cityApiSearch(cityNameElement.value );
    console.log(cityNameElement);
}

let degreeElement=document.querySelector("#degree");
let humidElement=document.querySelector("#humid");
let airElement=document.querySelector("#air");
let descriptionElement=document.querySelector("#description");
let dateTime=document.querySelector("#dateandtime");
let imgElement= document.querySelector("#imgIcon");
let fahrenheitElement = document.querySelector("#fahrenheitlink")
fahrenheitElement.addEventListener("click", displayFahrenheit)
let celsiusElement = document.querySelector("#celsiuslink")
celsiusElement.addEventListener("click", displayCelsius)


function weekDays(timestamp){
    let date=new Date(timestamp);
    let day = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let days= day[date.getDay()];
    
    return `${days},${dailyForecast(timestamp)}`;
  }

function dailyForecast(timestamp){
  let date=new Date(timestamp);
       let hours=date.getHours();
    if (hours<10){
        hours = `0${hours}`;
    }
    let minutes=date.getMinutes();
        if (minutes<10){
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }






function temperature (response){
// console.log(response.data.main.temp);
overallTemperature = (response.data.main.temp);
let cityElement=document.querySelector("#city");
cityElement.innerHTML= (response.data.name);
degreeElement.innerHTML= Math.round(response.data.main.temp);
humidElement.innerHTML= Math.round(response.data.main.humidity);
airElement.innerHTML= Math.round(response.data.wind.speed);
descriptionElement.innerHTML=(response.data.weather[0].description);
dateTime.innerHTML= weekDays(response.data.dt*1000);
let imgpath = (response.data.weather[0].icon);
let altpath= (response.data.weather[0].description);
// console.log(imgpath);
imgElement.setAttribute("src",`http://openweathermap.org/img/wn/${imgpath}@2x.png`);
imgElement.setAttribute("alt",`http://openweathermap.org/img/wn/${altpath}@2x.png`);
}

function displayFahrenheit(event){
    event.preventDefault();  
    
    let farenhiteTemperature = ((overallTemperature*9)/5+32);
    let degreeElement = document.querySelector("#degree");
    degreeElement.innerHTML = Math.round(farenhiteTemperature);
    celsiuslink.classList.remove("active");
    fahrenheitlink.classList.add("active");
}

function displayCelsius(event){
    event.preventDefault();
    let degreeElement = document.querySelector("#degree");
    degreeElement.innerHTML = Math.round(overallTemperature);
    celsiuslink.classList.add("active");
    fahrenheitlink.classList.remove("active");
}
let overallTemperature = null; 


