import {useWeatherContext} from "../context/WeatherContext"
import Card from "../components/Card"

function Main(){
    let days= new Array(7).fill("");
    console.log(days)
    return (
    <div id="main" className="grid-container">
        {
            days.map((element,index)=>{
                return <Card dayOrder={index}  key={index}/>
            })    
            
        }
    </div>)
}

export default Main