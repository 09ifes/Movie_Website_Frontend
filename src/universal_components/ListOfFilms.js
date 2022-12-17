import HomepageFilmDetails from "./HomepageFilmDetails"

export default function ListOfFilms(props) {
    return (
        <div>
            <h1 class='list-of-films-title'>{props.name}</h1>
            <div class='list-of-films'>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                <HomepageFilmDetails/>
                
            </div>
            <a className="navbar-links view-more-button" href='#'>View More</a>
        </div>

    )

}