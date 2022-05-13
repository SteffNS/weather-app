import { Link } from "react-router-dom";

const PageNotFound = () =>{
    return(
        <section>
            <h1>Oops, Page Not Found</h1>
            <p>Looks like you accidentally found this page.</p>
            <p>Go back <Link to='/' exact = 'true' >home</Link> or check out my <a href='https://steffenns.com' target="_blank" rel='noreferrer'>portfolio</a> with other projects!</p>
        </section>
    )
};

export default PageNotFound;