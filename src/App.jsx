import React, { useState } from "react";
import Nav from './Nav';       // Import Nav component
import Content from './Content'; // Import Content component

function App() {
    const [weatherData, setWeatherData] = useState({
        weathr: '--',
        description: '',
        temp: '--',
        humidity: '--',
        wind: '--',
    });

    return (
        <div>
            <Nav setWeatherData={setWeatherData} weatherData={weatherData} />  {/* Pass setWeatherData to Nav */}
            <Content weatherData={weatherData} />    {/* Pass weatherData to Content */}
        </div>
    );
}

export default App;
