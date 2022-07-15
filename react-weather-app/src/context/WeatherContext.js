import {useState,createContext,useContext,useEffect} from "react"
import axios from "axios"
let WeatherContext=createContext();

export const WeatherContextProvider = ({children})=> {

    let sendInitialApiCall =()=>{
        let config = {
            headers: {
                "content-type": "application/json",
                "authorization": process.env.REACT_APP_API_KEY
            }
        }
        axios(`https://api.collectapi.com/weather/getWeather?data.lang=en&data.city=${selectedCity}`, config).then((response) => {
            let data = response.data
            return data;
        })

    }

    let [selectedCity,setSelectedCity] = useState("Istanbul");
    let [currentDate,setCurrentDate]= useState(new Date())

    let [weatherData,setWeatherData]= useState(sendInitialApiCall())

    let values={selectedCity,setSelectedCity,currentDate,setCurrentDate,weatherData,setWeatherData}
    
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeatherContext= () => {
    return useContext(WeatherContext)
}