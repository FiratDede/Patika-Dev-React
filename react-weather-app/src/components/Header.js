import { useEffect } from "react";
import {useWeatherContext}  from "../context/WeatherContext"
import axios from "axios"
function Header(){
    let {selectedCity,setSelectedCity,setWeatherData} = useWeatherContext();

    useEffect(()=>{
        let config = {
            headers: {
                "content-type": "application/json",
                "authorization": process.env.REACT_APP_API_KEY
            }
        }
        axios(`https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=${selectedCity}`, config).then((response) => {
            let data = response.data
            setWeatherData(data)
        })

    },[selectedCity])


    let handleChange= (e)=> {
        setSelectedCity(e.target.value)
    }
    return (
    <>
        <div id="header">
            <select id="city" name="city" value={selectedCity} onChange={handleChange}>
                <option value="Istanbul" >İstanbul</option>
                <option value="Ankara">Ankara</option>
     
            </select>
        </div>
    </>)
}

export default Header