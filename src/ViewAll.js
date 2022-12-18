import ListOfFilms from "./universal_components/ListOfFilms"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewAll(props) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [films, setFilms] = useState(1);
    const { filter } = useParams();
    let url = "http://localhost:8080/all_films";
    let name = "All Films";


    if (filter == "most-popular") {
        url = "http://localhost:8080/most_popular";
        name = "Most Popular";

    }
    else if (filter == "most-recent") {
        url = "http://localhost:8080/most_recent";
        name = "Most Recent";
    }
    else if (filter == "search-films") {
        url = "http://localhost:8080/search_films"
        name = "Search Results"
    }


    function setStates(get_films) {
        setFilms(get_films);
        console.log(url);
        //console.log(url_param);
        let number_of_films = get_films.length;
        setTotalPages(Math.ceil(number_of_films / 40));

    }

    if (films == 1) {
        fetch(url).then(response => response.json()).then((get_films) => setStates(get_films));
    }

    if (films.length > 0) {
        let array_end = (40 * page) - 1;
        let array_start = array_end - 39;
        let films_40 = films.slice(array_start, (array_end + 1));

        return (
            <div>
                <div>
                    <ListOfFilms name={name} films={films_40} class="hide-button" />
                </div>

                <div id='page-buttons-div'>
                    <div class='page-buttons back-button-div'>
                        <button class='page-buttons back-button'>{'<<'}</button>
                    </div>
                    <button class='page-buttons'>{page}</button>
                    <div class='page-buttons forward-button-div'>
                        <button class='page-buttons forward-button'>{'>>'}</button>
                    </div>



                </div>
            </div>



        )


    }
}