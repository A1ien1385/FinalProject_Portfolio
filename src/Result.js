import React from 'react';


const Result = (props) => {

    const {date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;

    let content = null;

    if(!err && city)
    {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div>
           <h3>{`Search for city ${city}:`}</h3>
           <h4>{`Temperature: ${temp}`}</h4>
           <h4>{`Sunrise: ${sunriseTime}`}</h4>
           <h4>{`Sunset: ${sunsetTime}`}</h4>
           <h4>{`Pressure: ${pressure} hPa`}</h4>
           <h4>{`Wind: ${wind} m/s`}</h4>
            </div>
        )
    }

    return (
        <h3 className='weatherResult'>
           {err ? `No city with this name` : content} 
        </h3>
    )
}

export default Result