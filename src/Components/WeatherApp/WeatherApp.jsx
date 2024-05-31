import { FaSearch } from "react-icons/fa";
import cloudimage from "../../assets/cloudimage.png"
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import cloud1 from "../../assets/cloud1.png"
import clearicon1 from "../../assets/clearicon1.png"
import drizzleicon from "../../assets/drizzleicon.png"
import rainicon from "../../assets/rainicon.png"
import snowicon from "../../assets/snowicon.png"
import { GiNetworkBars } from "react-icons/gi";0
import { ImConnection } from "react-icons/im";
import { HiBattery50 } from "react-icons/hi2";
import "./WeatherApp.css"
import { useState } from "react";


const WeatherApp =()=>{
    let api_key= "fb0f0e8f6230f4c06e3ff0c7003daca2";

    const [wicon, setWicon]= useState(cloudimage)

    const search = async()=>{
    const element =document.getElementsByClassName("cityinput")
    if(element[0].value==="")
    {
        return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

    let response =await fetch(url);
    let data =await response.json();
    // catch(err) = console.log (err)


    const humidity= document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature = document.getElementsByClassName("weathertemp")
    const location =document.getElementsByClassName("weatherlocation")

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+ "km/h";
    temperature[0]. innerHTML= Math.floor (data.main.temp)+"°C";
    location[0]. innerHTML= data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
        setWicon(clearicon1);
    }
    else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
        setWicon(cloud1)
    }
    else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
        setWicon(drizzleicon)
    }
    else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
        setWicon(drizzleicon)
    }
    else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
        setWicon(rainicon)
    }
    else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
        setWicon(rainicon)
    }
    else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
        setWicon(snowicon)
    }
    else{
        setWicon(clearicon1);
    }

    }

    return(
<div className="Container">
    <div className="Wrapper">
        <div className="UP">
            <p>4:15</p>
            <div className="upicon">
            <GiNetworkBars />
            <ImConnection />
            <HiBattery50 />
            </div>
        </div>
        <div className="topbar">
           <input type="text" className="cityinput" placeholder="Search" />
           <div className="searchicon" onClick={()=>{search()}}>
           <FaSearch className="icon" />
           </div>
          
        </div>
        <div className="weatherimage">
            <img src={wicon} alt="" />
        </div>
        <div className="weathertemp">81°C</div>
        <div className="weatherlocation">London</div>
        <div className="data-container">
            <div className="element">
            <WiHumidity className="ic"/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
            <TbWind className="ic"/>
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>


    </div>


</div>
    )
}
export default WeatherApp