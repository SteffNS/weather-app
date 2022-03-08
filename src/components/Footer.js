const Footer = () => {

    //get current year
    let year = new Date().getFullYear();

    return(
        <footer>
            <p>Steffen {year} </p>
        </footer>
    )
}

export default Footer;