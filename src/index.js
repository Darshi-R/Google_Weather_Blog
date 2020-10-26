let apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=New York&appid=32669c9d2438b0a7d99b979086328197&units=metric";
let degreeElement=document.querySelector("#degree");
let humidElement=document.querySelector("#humid");
let airElement=document.querySelector("#air");
let descriptionElement=document.querySelector("#description");
let dateTime=document.querySelector("#dateandtime");


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
degreeElement.innerHTML= Math.round(response.data.main.temp);
humidElement.innerHTML= Math.round(response.data.main.humidity);
airElement.innerHTML= Math.round(response.data.wind.speed);
descriptionElement.innerHTML=(response.data.weather[0].description);
dateTime.innerHTML= weekDays(response.data.dt*1000);
}
axios.get(apiUrl).then(temperature);