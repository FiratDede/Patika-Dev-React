import { useEffect, useState } from "react"
import { useWeatherContext } from "../context/WeatherContext"

function Card({ dayOrder }) {
    let { weatherData } = useWeatherContext();
    
    let [cardWeatherInfo, setCardWeatherInfo]=useState(undefined)
    
    useEffect(()=>{
        
        if(weatherData){
            console.log(weatherData)
        setCardWeatherInfo({
            city: weatherData.city, date: weatherData.result[dayOrder].date, day: weatherData.result[dayOrder].day,
            icon: weatherData.result[dayOrder].icon, max: weatherData.result[dayOrder].max, min: weatherData.result[dayOrder].min
            })
        }
    },[weatherData])


    return (
        <>
        {
            weatherData && 
            <div className={`grid-item card ${dayOrder==0 ? "first-card" : ""}`}>
                <div className="dayInfo">{cardWeatherInfo && cardWeatherInfo.day.substring(0,3) }</div>
                <img className="weatherIcon" src={cardWeatherInfo && cardWeatherInfo.icon }/>
                <div>  <span className="maxDegree">{cardWeatherInfo&& Math.round(cardWeatherInfo.max)}°</span>     <span className="minDegree"> {cardWeatherInfo&&Math.round( cardWeatherInfo.min)}°</span>    
                </div>

            </div>
        }
        
        </>
    )
}

export default Card