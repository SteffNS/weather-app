const Condition = (props) => {

    function timeConvert(num){
        var h,m="00";
        if(num<100)
          h=num;
        else {
          h=Math.floor(num/100);
          m=("0"+(num%100)).slice(-2);
        }
        h=h%24;
        return ("0"+h).slice(-2)+":"+m;
    }

    function timeMaker(num){
        let sunHour = new Date(num).getHours();
        // let sunMin = new Date(num).getMinutes();
        // let sunTime = `${sunHour}:${sunMin}`;
        // return sunTime;
        return sunHour;
    };

    return(
        <div>

            {/* Error prompt if invalid city */}
            {props.error && <p>Error, please enter a valid city. Check your spelling.</p>}
            {/* Loading while fetching info from api */}
            {props.loading && <p>Loading... Please wait</p>}

            {props.responseObj.cod === 200 ? 
                //if valid, outputs the info 
                <div>
                    <p>{props.responseObj.name}, {props.responseObj.sys.country}</p>
                    <p>Currently it is {Math.round(props.responseObj.main.temp)}&#176; with {props.responseObj.weather[0].description}.</p>
                    <p>
                        Right now it feels like {Math.round(props.responseObj.main.feels_like)}&#176;, highs will be around {Math.round(props.responseObj.main.temp_max)}&#176; and lows around {Math.round(props.responseObj.main.temp_min)}&#176;
                    </p>
                    <p>
                        Sunrise is at {timeConvert(props.responseObj.sys.sunrise)} and sunset is at {timeConvert(props.responseObj.sys.sunset)}
                        <br />
                        Sunrise is at {timeMaker(props.responseObj.sys.sunrise)}
                        Sunset is at {timeMaker(props.responseObj.sys.sunset)}
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