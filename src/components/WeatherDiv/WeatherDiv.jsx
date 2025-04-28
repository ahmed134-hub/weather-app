import "./WeatherDiv.css"
import { RiWaterPercentFill } from "react-icons/ri";
import { FiWind } from "react-icons/fi";
import { FaCompress } from "react-icons/fa";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";





const WeatherDiv = () => {

const {weatherData,error,loading} =useContext(WeatherContext)
if(error) {
    return <div className="error">Error: {error}</div>;
  }
  if(loading) {
    return <div className="loading">Loading...</div>;
  }
  if (!weatherData) {
    return <div className="no-data">No weather data available</div>;
  }
  return (
    <div className="weather-container">
        <h5>{weatherData.location.localtime}</h5>
        <div className="weather-div">
            <div className="weather-div-left">
                <h3>{weatherData.location.name}</h3>
                <p>{weatherData.location.country}</p>
            </div>
            <div className="img">
              <img src={weatherData.current.condition.icon} alt="sasa" />
              <p>{weatherData.current.condition.text}</p>
            </div>
            <div className="weather-div-right">
                <h3>{weatherData.current.temp_c}°</h3>
                <p>feels like : {weatherData.current.feelslike_c}°</p>
                <p>Max : {weatherData.forecast.forecastday[0].day.maxtemp_c}°</p>
                <p>Min : {weatherData.forecast.forecastday[0].day.mintemp_c}°</p>
            </div>
        </div>
      <div className="other">
        <div className="humidity">
          <RiWaterPercentFill />
          <p>Humidity:{weatherData.current.humidity}%</p>
        </div>
        <div className="wind">
          <FiWind />
          <p>Wind:{weatherData.current.wind_mph}</p>
        </div>
        <div className="pressure">
          <FaCompress />
          <p>Pressure:{weatherData.current.pressure_in}</p>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-div">
          {weatherData.forecast.forecastday[0].hour.map((day, index) => (
            <div key={index} className="forecast-day">
              <h4>{day.time}</h4>
              <img src={day.condition.icon} alt="sasa" />
              <h5>{day.temp_c}°</h5>
              <p>{day.condition.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
)
}

export default WeatherDiv
