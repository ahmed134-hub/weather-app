import "./Content.css"

import Search from '../Search/Search';
import WeatherDiv from '../WeatherDiv/WeatherDiv';
import { useState } from "react";


const Content = () => {


    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true)
    }

return (
    <div className='content-container'>
        <Search handleClick={handleClick} />
        {clicked?<WeatherDiv/>:null} 
    </div>
)
}

export default Content
