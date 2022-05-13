import Forecast from '../components/Forecast';

const PageHome = () => {

    return(
        <div id='home'>
            <section className="home">
                <h1>React Weather App</h1>
                <p>Search for a city below to find the current weather conditions.</p>
                <Forecast />
            </section>
        </div>
    )
}


export default PageHome;