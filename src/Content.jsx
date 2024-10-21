import React, {useState} from "react";
import { FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa';

// Example mapping of weather conditions to GIF URLs
const weatherGifs = {
    clear: "https://i.pinimg.com/originals/db/3c/37/db3c37282883811b4005381647feab18.gif", // Clear weather GIF
    rain: "https://img.clipart-library.com/2/clip-lightning-gif-background/clip-lightning-gif-background-12.gif",   // Rainy weather GIF
    snow: "https://cdn-icons-gif.flaticon.com/6454/6454998.gif",   // Snowy weather GIF
    clouds: "https://www.icegif.com/wp-content/uploads/2023/08/icegif-886.gif", // Cloudy weather GIF
    // Add more mappings as needed
};

function Content({ weatherData }) {
    const { weathr, temp, humidity, wind } = weatherData;

    // Determine the appropriate GIF based on the weather description
    const gifUrl = weatherGifs[weathr.toLowerCase()] || weatherGifs["clear"]; // Fallback to clear if not found
    const [isCelsius, setIsCelsius] = useState(true);
    const numericTemp = Number(temp);
    // Convert temperature to Fahrenheit if needed
    const temperature = isCelsius ? temp : (temp * 9/5) + 32;
    return (
        <div className="content">
            <div className="content-box">
                <div className="content-image">
                    <img
                        src={gifUrl}
                        className="gif-im"
                        alt="Weather Animation"
                    />
                </div>
                <div className="content-temp">
                    <h3>{temperature}°{isCelsius ? 'C' : 'F'}</h3>
                    <button onClick={() => setIsCelsius(!isCelsius)}>
                        Switch to °{isCelsius ? 'F' : 'C'}
                    </button>
                </div>
                <div className="content-details">
                    <h4>
                        <FaTemperatureHigh className="icons" /> {weathr}
                    </h4>
                    <p>
                        <FaTint className="icons" /> {humidity}%
                    </p>
                    <h4>
                        <FaWind className="icons" /> {wind} m/s
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Content;
