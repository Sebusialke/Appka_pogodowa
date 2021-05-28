import React from 'react';
import 'weather-icons-lite/css/weather-icons-lite.css';
import Todayinfo from'./components/TodayWeather';
import Searching from './components/Searching';
import Clock from './components/Clock';
import MapLocation from './components/MapLocation';
import BackGround from './components/BackGround';
import './components/static/style.css'; 

const API_KEY = '7d575bb0365a0d1050ad7490cb098312';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      location:{
        lat: undefined,
        long: undefined
      },
      which: 'current_location',
      temperature: undefined,
      max: undefined,
      min: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      wind_speed: undefined,
      id: undefined,
      sunset: undefined
    }
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);  
  }
  
  getTodayWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(data.message !== "city not found"){
    console.log(data);
     
    this.setState({
      location:{
        lat: data.coord.lat,
        long: data.coord.lon
      },
      temperature:  Math.round(data.main.temp-273.15),
      max: Math.round(data.main.temp_max-273.15),
      min: Math.round(data.main.temp_min-273.15),
      city: data.name,
      country:  data.sys.country,
      humidity: data.main.humidity,
      wind_speed: Math.round(data.wind.speed*3.6),
      id: data.weather[0].id,
      sunset: data.sys.sunset
    })
  }
}

  getLocation(){
    if(this.state.which === 'current_location'){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    }else{
      alert("Geolocation is not supported by this browser!")
    }
  }
  }

  getCoordinates = async (position) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      location:{
        lat: data.coord.lat,
        long: data.coord.lon
      },
      which: 'other_location',
      temperature:  Math.round(data.main.temp-273.15),
      max: Math.round(data.main.temp_max-273.15),
      min: Math.round(data.main.temp_min-273.15),
      city: data.name,
      country:  data.sys.country,
      humidity: data.main.humidity,
      wind_speed: Math.round(data.wind.speed*3.6),  
      id: data.weather[0].id,
      sunset: data.sys.sunset
      })
      
  }

  render(){
    return (
        <div>
            {this.getLocation()}
            <BackGround id={this.state.id}/>
            <Searching getTodayWeather={this.getTodayWeather} getLocation={this.getLocation}/> 
            <Todayinfo sunset = {this.state.sunset} wind={this.state.wind_speed} temp={this.state.temperature} max={this.state.max} min={this.state.min} city={this.state.city} country={this.state.country} humidity={this.state.humidity} id = {this.state.id}/>
            <Clock/>
            <MapLocation location = {this.state.location}/>
          </div>
    )
   };
}
export default App;