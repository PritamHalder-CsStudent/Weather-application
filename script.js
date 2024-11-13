const ApiKey="800b1e87b88475182902f850ff3e94d5";
const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input_city=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weather_icons=document.querySelector(".weather-icon");

async function checkWeather(city) {
   const responce= await fetch(URL + city + `&appid=${ApiKey}`);
   if(responce.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   }
   else{
    var data=await responce.json();
    console.log(data);
 
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/h";
 
    if(data.weather[0].main=="Clouds"){
         weather_icons.src="images/weather.png";
    } 
    else if(data.weather[0].main=="Haze"){
         weather_icons.src="images/haze.png";
    }
    else if(data.weather[0].main=="Clear"){
     weather_icons.src="images/sun.png";
    }
    else if(data.weather[0].main=="Rain"){
     weather_icons.src="images/heavy-rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
     weather_icons.src="images/heavy-rain.png";
    }
    else if(data.weather[0].main=="Snowy"){
     weather_icons.src="images/snowy.png";
    }
    else if(data.weather[0].main=="Smoke"){
     weather_icons.src="images/smoke.png";
    }
    else if(data.weather[0].main=="Mist"){
     weather_icons.src="images/fog.png";
    }
 
 
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

   }
}

btn.addEventListener("click",()=>{
    checkWeather(input_city.value);
});