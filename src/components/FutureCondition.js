const FutureCondition = (props) => {
    return(
        <div>
            {props.error && <p>Error invalid city</p>}
            {props.loading && <p>Loading...</p>}

            {props.responseObj.cod === 200 ? 
                <div>
                    <p>
                        {props.responseObj.name}, {props.responseObj.sys.country}
                    </p>
                    {props.responseObj.map()}
                </div>
                :
                null
            }
        </div>
    )
}

export default FutureCondition;