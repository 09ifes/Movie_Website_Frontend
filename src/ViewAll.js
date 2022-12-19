import ListOfFilms from "./universal_components/ListOfFilms"
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function ViewAll(props) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [films, setFilms] = useState(1);
    const { filter } = useParams();
    const location  = useLocation();
    const [ search, setSearch] = useState(1);

    let url = "http://localhost:8080/all_films";
    let name = "All Films";
    let showButton1 = "show-button";
    let showButton2 = "show-button";


    if (filter == "most-popular") {
        url = "http://localhost:8080/most_popular";
        name = "Most Popular";

    }
    else if (filter == "most-recent") {
        url = "http://localhost:8080/most_recent";
        name = "Most Recent";
    }
    else if (filter == "search-films"){
        name = "Search Results";
    }
    

    // if on first or last page, hides the arrow buttons accordingly
    if (page == totalPages) {
        showButton2 = "hide-button"
    }
    if (page == 1) {
        showButton1 = "hide-button"
    }


    function setStates(get_films) {
        setFilms(get_films);
        let number_of_films = get_films.length;
        setTotalPages(Math.ceil(number_of_films / 40));
    }

    if (films == 1) {
        if (filter == "search-films") {
            
            let input = '\'{\"title\": \"' + location.state  + '"}\'';
            const data = JSON.stringify(input);
            console.log(location.state)
            console.log(input)
            fetch('http://localhost:8080/search_films', {
                method: 'post',
                body: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

            }).then(response => response.json()).then((get_films) => setStates(get_films))
            
        }
        else {
            fetch(url).then(response => response.json()).then((get_films) => setStates(get_films));
        }

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
                        <button class={'page-buttons back-button ' + showButton1} onClick={() => setPage(page - 1)}>{'<<'}</button>
                    </div>
                    <div class='page-buttons center-button-div'>
                        <button class='page-buttons'>{page}</button>
                    </div>
                    <div class='page-buttons forward-button-div'>
                        <button class={'page-buttons forward-button ' + showButton2} onClick={() => setPage(page + 1)}>{'>>'}</button>
                    </div>



                </div>
            </div>



        )


    }
}