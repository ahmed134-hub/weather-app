import "./WeatherDiv.css"
import { RiWaterPercentFill } from "react-icons/ri";
import { FiWind } from "react-icons/fi";
import { FaCompress } from "react-icons/fa";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";





const WeatherDiv = () => {


const {weatherData,error,loading} =useContext(WeatherContext)
const {current,forecast} = weatherData

const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });




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
        <h5>{formattedDate}</h5>
        <div className="weather-div">
            <div className="weather-div-left">
                <h3>{current.name}</h3>
                <p>{current.sys.country}</p>
            </div>
            <div className="img">
              <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="sasa" />
              <p>{current.weather[0].main}</p>
            </div>
            <div className="weather-div-right">
                <h3>{current.main.temp}°</h3>
                <p>feels like : <span>{current.main.feels_like }</span>°</p>
                <p>Max : <span>{current.main.temp_max }</span>°</p>
                <p>Min : <span>{current.main.temp_min}</span>°</p>
            </div>
        </div>
      <div className="other">
        <div className="humidity">
          <RiWaterPercentFill />
          <p>Humidity : {current.main.humidity}%</p>
        </div>
        <div className="wind">
          <FiWind />
          <p>Wind : {current.wind.speed} km/h</p>
        </div>
        <div className="pressure">
          <FaCompress />
          <p>Pressure : {current.main.pressure} hPa</p>
        </div>
      </div>
      <div className="forecast">
        <div className="forecast-div">
          {forecast.list.slice(0,9).map((day, index) => (
            <div key={index} className="forecast-day">
              <h4>{day.dt_txt}</h4>
              <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="sasa" />
              <h5>{day.main.temp}°</h5>
              <p>{day.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
)
}

export default WeatherDiv
