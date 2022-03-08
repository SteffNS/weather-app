const Condition = (props) => {
    return(
        <div>
            {props.error && <p>Error, please enter a valid city. Check your spelling.</p>}
            {props.loading && <div>Loading</div>}
            {props.responseObj.cod === 200 ? 
                <div>
                    <p>{props.responseObj.name}</p>
                    <p>Currently it is {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}.</p>
                </div>
            : 
                null 
            }
        </div>
    )
}

export default Condition;