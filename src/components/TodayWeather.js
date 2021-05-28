import React from 'react';
import Droplet from './static/img/droplet.png';

function getIcon(id){ 
    var day = "day";
    if(id === 800){
        const class_name=`wi-5x wi wi-darksky-clear-${day}`
        return <i className={class_name}/>
    }else{
        if(id >= 200 && id <= 232 ){
            return <i className="wi-5x wi wi-darksky-thunderstorm"/>
        }else{
            if((id >= 300 && id <= 321 )||( id >= 500 && id <= 531)){
                return <i className="wi-5x wi wi-darksky-rain"/>
            }else{
                if(id >= 600 && id <= 622){
                    return <i className="wi-5x wi wi-darksky-snow"/>
                }else{
                    if(id > 801 && id <= 804){
                        return <i className="wi-5x wi wi-darksky-cloudy"/>     
                    }else{
                        if(id === 801){
                            const class_name=`wi-5x wi wi-darksky-partly-cloudy-${day}`
                            return <i className={class_name}/>     
                        }
                    }
                }
            }
        }
    }
    return <i></i>
}


const TodayWeather = (props) => {
    if(props.city !== undefined && props.country !== undefined){
        return(
            
            <div className="today-weather-div">
                <div>
                <center><h1>{props.city}</h1></center>
                <span className='temp-p'>{props.temp}&deg;C</span>
                    <span className='weather-icon-p'>{getIcon(props.id)}</span>
                    <span className='humidity-p'>
                    <img className="droplet-img" alt="hum:" src={Droplet}/> <span className="humidity-value">{props.humidity}% </span>          
                    </span>
                    <span className='wind-p'>
                        <span className="wind-icon"><p className='wi-2x wi wi-darksky-wind'></p></span>
                        <span className="wind-value"> {props.wind} Km/h </span>
                    </span>
                    <span className='max-temp-p'>Max: {props.max}&deg;C</span>
                    <span className='min-temp-p'>Min: {props.min}&deg;C</span>
                </div>
            </div>
        )
    }else{
        return <div></div>
    }
}
export default TodayWeather;