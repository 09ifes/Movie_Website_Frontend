import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PartialFilmDetails from './universal_components/PartialFilmDetails';



export default function ViewFilm(props) {
    const { id } = useParams();

    // state variables to store the results of the api calls
    const [film, setFilm] = useState(1);
    const [actors, setActors] = useState(1);
    const [similarFilms, setSimilarFilms] = useState(1);

    if (film == 1) {
        fetch("http://localhost:8080/view_film/" + id).then(response => response.json()).then((getFilm) => setFilm(getFilm));
        fetch("http://localhost:8080/view_film/" + id + "/all_actors").then(response => response.json()).then((getActors) => setActors(getActors));
        fetch("http://localhost:8080/view_film/" + id + "/similar_films").then(response => response.json()).then((getFilms) => setSimilarFilms(getFilms));

    }
    console.log(film)


    // executes after data has been fully loaded into state array, to prevent undefined variables
    if (film.length > 0 && actors.length > 0 && setSimilarFilms.length > 0) {

        let similarFilmslist = [];
        for (var i = 0; i < similarFilms.length; i++) {
            similarFilmslist.push(<PartialFilmDetails data={similarFilms[i]} />);
        }

        let actorsList = [];
        for (var i = 0; i < actors.length; i++) {
            let first_name = actors[i].first_name;
            let last_name = actors[i].last_name;
            actorsList.push(<li>{first_name + " " + last_name}</li>);
        }

        let view_film = film[0];
        return (
            <div id="view-film">
                <iframe id="view-film-video" frameborder="0" type="text/html" src={view_film.video_url}
                    allowfullscreen title="Dailymotion Video Player" > </iframe>
                <div id="view-film-details">
                    <img className="view-film-image" src={view_film.img_url}></img>
                    <div id="view-film-information">
                        <h1 class='film-details-title'>{view_film.title}</h1>
                        <h4>Rating: {view_film.customer_rating}</h4>
                        <p>{view_film.description}</p>
                        <p>Genre: {view_film.name}</p>
                        <p>Release year: {view_film.release_year}</p>
                        <p>Actors:</p>
                        <ul>
                            {actorsList}
                        </ul>
                        <a href={'/film/edit/' + view_film.film_id }>Edit Film</a>
                    </div>
                </div>
                <div>
                    <h1 class='list-of-films-title'>Similar Films</h1>
                    <div class='list-of-films'>
                        {similarFilmslist}
                    </div>

                </div>


            </div>
        )

    }



}