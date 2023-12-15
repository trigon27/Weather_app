import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from './Assets/search.png'
import clear_icon from './Assets/clear.png'
import cloud_icon from './Assets/cloud.png'
import drizzle_icon from './Assets/drizzle.png'
import humidity_icon from './Assets/humidity.png'
import rain_icon from './Assets/rain.png'
import snow_icon from './Assets/snow.png'
import wind_icon from './Assets/wind.png'

const WeatherApp = () => {
    let API_KEY="2d29c0712b35eb3bfc55f513ad5d1030";
    const [wicon,setWicon]=useState(cloud_icon);
    const search = async() =>{
        const element=document.getElementsByClassName("cityName");
        
        if(element[0].value===""){
            return 0 ;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`;
        let response= await fetch(url);
        let data=await response.json();
        const humidity=document.getElementsByClassName("humidity-percentage");
        const wind=document.getElementsByClassName("wind-rate");
        const temparature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");

        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+" km/h";
        temparature[0].innerHTML=data.main.temp+"°c";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
            element[0].value="";
    }
  return (
    <div className='container'>
        <div className="topbar">
            <input type="text"  className='cityName' placeholder='search '/>
            <div className="searchIcon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
            </div>
            <div className="weatherIamge">
                <img src={wicon} alt="" />

            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="dataContainer">
                <div className="elements">
                    <img src={humidity_icon} alt="" className='icon'/>
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="elements">
                    <img src={wind_icon} alt="" className='icon'/>
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">wind speed</div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default WeatherApp
