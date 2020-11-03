
function cityApiSearch(city){
      let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32669c9d2438b0a7d99b979086328197&units=metric`;
      axios.get(apiUrl).then(temperature);

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

function weekDays(timestamp){
    let date=new Date(timestamp);
    let day = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let days= day[date.getDay()];
    let hours=date.getHours();
    if (hours<10){
        hours = `0${hours}`;
    }
    let minutes=date.getMinutes();
        if (minutes<10){
        minutes = `0${minutes}`;
    }
    return `${days},${hours}:${minutes}`;
    
}
function temperature (response){
// console.log(response.data.main.temp);
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
