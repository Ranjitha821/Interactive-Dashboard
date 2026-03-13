function generateUser(){

fetch("https://randomuser.me/api/")
.then(response=>response.json())
.then(data=>{

let user=data.results[0]

document.getElementById("user").innerHTML=
`
<img src="${user.picture.large}">
<p>${user.name.first} ${user.name.last}</p>
<p>${user.email}</p>
<p>${user.location.country}</p>
`

})

}



function addTask(){

let task=document.getElementById("task").value

let li=document.createElement("li")

li.innerText=task

li.onclick=function(){
li.style.textDecoration="line-through"
}

li.ondblclick=function(){
li.remove()
}

document.getElementById("list").appendChild(li)

}



function filterProducts(){

let input=document.getElementById("search").value.toLowerCase()

let items=document.querySelectorAll("#products li")

items.forEach(function(item){

if(item.innerText.toLowerCase().includes(input))
item.style.display="block"
else
item.style.display="none"

})

}
function getWeather(){

let city = document.getElementById("city").value;

fetch("https://geocoding-api.open-meteo.com/v1/search?name="+city)
.then(res => res.json())
.then(data => {

let lat = data.results[0].latitude;
let lon = data.results[0].longitude;

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
.then(res => res.json())
.then(weatherData => {

let temp = weatherData.current_weather.temperature;
let wind = weatherData.current_weather.windspeed;

document.getElementById("weatherResult").innerHTML =
"Temperature: " + temp + "°C <br> Wind Speed: " + wind + " km/h";

})

})

}