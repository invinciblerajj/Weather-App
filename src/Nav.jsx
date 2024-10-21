import React, { useState } from "react";
import axios from "axios";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function Nav({ setWeatherData,weatherData }) {
    const [loc, setLoc] = useState('');
    const { weathr, description, temp, humidity, wind } = weatherData;
    function handleChange(event) {
        setLoc(event.target.value);
    }

    const weather = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${REACT_APP_API_KEY}`);
            const result = response.data;
            setWeatherData({
                weathr: result.weather[0].main,
                description: result.weather[0].description,
                temp: (result.main.temp_max - 273.15).toFixed(1), // Convert to Celsius
                humidity: result.main.humidity,
                wind: result.wind.speed,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="navbar nav">
            <div className="nav-container">
            <h1 className="nav-logo">Weather App</h1>
            <div>
            <input  type="text"
                        name="location"
                        value={loc} 
                        onChange={handleChange}
                        className="nav-input" placeholder="Search"/>
                <button onClick={weather} className="nav-button">Get Weather</button>
            </div>
            </div>
        </nav>
    );
    }

export default Nav;
