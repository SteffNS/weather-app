const Condition = (props) => {
    return(
        <div>
            {/* Error prompt if invalid city */}
            {props.error && <p>Error, please enter a valid city. Check your spelling.</p>}
            {/* Loading while fetching info from api */}
            {props.loading && <p>Loading</p>}

            {props.responseObj.cod === 200 ? 
                //if valid, outputs the info 
                <div>
                    <p>{props.responseObj.name}</p>
                    <p>Currently it is {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}.</p>
                </div>
            : 
                //if invalid, outputs nothing
                null 
            }
        </div>
    )
}

export default Condition;