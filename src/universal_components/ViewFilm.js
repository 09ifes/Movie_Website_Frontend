import ListOfFilms from "./ListOfFilms"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function ViewFilm(props) {
    const { id } = useParams()
    const [film, setFilm] = useState(1);

    if (film == 1) {
        fetch("http://localhost:8080/view_film/" + id).then(response => response.json()).then((getFilm) => setFilm(getFilm));
    }

    // executes after data has been fully loaded into state array, to prevent undefined variables
    if (film.length > 0) {
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
                            <li>Actor 1</li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>


            </div>
        )

    }



}