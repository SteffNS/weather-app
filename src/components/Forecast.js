//imports
import { useState } from "react";
import Condition from "./Condition";

const Forecast =  () =>{

    //variables
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity ] = useState('');
    let [unit, setUnit ] = useState('metric');
    let [error, setError] = useState(false);
    let[loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {

        //prevent default
        e.preventDefault();

        //check if user set a city
        if(city.length === 0){
            return setError(true);
        }

        setError(false);
        setResponseObj({});
        setLoading(true);

        //fetch api info
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error();            
            };
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        });
    };

    return(
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                <Condition responseObj = {responseObj} error = {error} loading = {loading} />
            </div>
            
            <form onSubmit = {getForecast}>
                
                <input type="text" placeholder = 'Enter A City' value = {city} onChange = {(e) => setCity(e.target.value)} />

                <label>
                    <input type="radio" name="units" value="metric" checked={unit === "metric"} onChange={(e)=>setUnit(e.target.value)} />
                    Metric    
                </label>

                <label>
                    <input type="radio" name="units" value="imperial" checked={unit === "imperial"} onChange={(e)=>setUnit(e.target.value)} />
                    Imperial    
                </label>

                <button type='submit'>Get Weather</button>
            </form>
        </div>
    )
}

export default Forecast;