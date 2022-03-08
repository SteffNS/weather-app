import Forecast from '../components/Forecast';

const PageHome = () => {

    return(
        <div>
            <section className="home">
                <h1>Home</h1>
                <p>Hopefully this will become a weather app shortly.</p>
                <Forecast />
            </section>
        </div>
    )
}


export default PageHome;