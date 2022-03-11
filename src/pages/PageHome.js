import Forecast from '../components/Forecast';
import Futurecast from '../components/Futurecast';

const PageHome = () => {

    return(
        <div>
            <section className="home">
                <h1>React Weather App</h1>
                <p>Search for a city below to find the current weather conditions.</p>
                <Forecast />
                <Futurecast />
            </section>
        </div>
    )
}


export default PageHome;