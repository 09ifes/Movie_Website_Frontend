import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";

export default function HomepageFilmDetails(props) {
    const navigate = useNavigate();

    return (
        <a href={'/view-film/' + props.data.film_id}>
        <div class='homepage-film-div'>
            <img class='film-image' src="https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg" />
            <div class='homepage-film-details'>
                <h3 class="homepage-film-title">{props.data.title}</h3>
                <h5 class="homepage-film-year">{props.data.release_year}</h5>
                <h5 class="homepage-film-category">{props.data.name}</h5>
            </div>
        </div></a>
    )

}