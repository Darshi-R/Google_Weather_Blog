let apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=New York&appid=32669c9d2438b0a7d99b979086328197&units=metric";
let degreeElement=document.querySelector("#degree");
let humidElement=document.querySelector("#humid");
let airElement=document.querySelector("#air");
let descriptionElement=document.querySelector("#description");





function temperature (response){
// console.log(response.data.main.temp);
degreeElement.innerHTML= Math.round(response.data.main.temp);
humidElement.innerHTML= Math.round(response.data.main.humidity);
airElement.innerHTML= Math.round(response.data.wind.speed);
descriptionElement.innerHTML=(response.data.weather[0].description);
}
axios.get(apiUrl).then(temperature);