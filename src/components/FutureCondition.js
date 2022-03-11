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
                    <p>testtttt</p>
                </div>
                :
                null
            }
        </div>
    )
}

export default FutureCondition;