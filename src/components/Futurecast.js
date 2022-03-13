//imports
import { useState } from "react";
import FutureCondition from "./FutureCondition";

const Futurecast = () => {

    //variables
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity ] = useState('');
    let [unit, setUnit ] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    function getFuturecast(e) {
        //prevent default
        e.preventDefault();

        if(city.length === 0){
            return setError(true);
        }

        setError(false);
        setResponseObj({});
        setLoading(true);

        //fetch api
        fetch(`https://community-open-weather-map.p.rapidapi.com/climate/month?q=${uriEncodedCity}&units=${unit}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        });
    }

    return(
        <div>
            <div>
                {JSON.stringify(responseObj)}
                <FutureCondition responseObj = {responseObj} error = {error} loading = {loading} />
            </div>
            
            <form onSubmit = {getFuturecast}>
                
                <input type="text" placeholder = 'Enter A City' value = {city} onChange = {(e) => setCity(e.target.value)} />

                <label>
                    <input type="radio" name="units" value="metric" checked={unit === "metric"} onChange={(e)=>setUnit(e.target.value)} />
                    Metric    
                </label>

                <label>
                    <input type="radio" name="units" value="imperial" checked={unit === "imperial"} onChange={(e)=>setUnit(e.target.value)} />
                    Imperial    
                </label>

                <button type='submit'>Get Future Weather</button>
            </form>
        </div>
    )
}

export default Futurecast;