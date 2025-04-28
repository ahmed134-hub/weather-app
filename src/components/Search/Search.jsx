import "./Search.css"
import { FaSearchLocation } from "react-icons/fa";
import { useState ,useContext} from 'react';
import { WeatherContext } from "../../context/WeatherContext";



const Search = ({handleClick}) => {

    const [searchInput, setSearchInput] = useState("")
    const [clicked, setClicked] = useState(true)
    const {fetchWeatherData} = useContext(WeatherContext)



const handleSearch = (e) => {
    setSearchInput(e.target.value)
    if(e.target.value.length > 0) {
        setClicked(false)
    }
    else {
        setClicked(true)
    }
}
const handleClickButton = () => {
    handleClick()
    fetchWeatherData(searchInput)
}

return (
    <div className="search-container">
        <h2>Weather App</h2>
        <div className="search">
            <input type="text" value={searchInput} onChange={handleSearch} />
            <button onClick={handleClickButton} disabled={clicked} > <FaSearchLocation className="icon" /> </button>
        </div>
    </div>
)
}

export default Search
