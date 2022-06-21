
const Condition = (props) => {

    
    return(
        <div>
            {/* Error prompt if invalid city */}
            {props.error && <p>Error, please enter a valid city. Check your spelling.</p>}
            {/* Loading while fetching info from api */}
            {props.loading && <p>Loading</p>}

            {props.responseObj.cod === 200 ? 
                //if valid, outputs the info 
                <div className = 'info-wrapper'>
                    <h3>{props.responseObj.name}, {props.responseObj.sys.country}</h3>
                    <p className = 'weather-info-para'>Currently it is {Math.round(props.responseObj.main.temp)}&#176; with {props.responseObj.weather[0].description}.</p>
                    <p className = 'weather-info-para'>
                        Right now it feels like {Math.round(props.responseObj.main.feels_like)}&#176;, highs will be around {Math.round(props.responseObj.main.temp_max)}&#176; and lows around {Math.round(props.responseObj.main.temp_min)}&#176;
                    </p>
                </div>
            : 
                //if invalid, outputs nothing
                null 
            }
        </div>
    )
}

export default Condition;