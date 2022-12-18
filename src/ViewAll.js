import ListOfFilms from "./universal_components/ListOfFilms"
import React, { useEffect, useState } from 'react';

export default function ViewAll(props) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [films, setFilms] = useState(1);

    function setStates(get_films){
       setFilms(get_films);
       let number_of_films = get_films.length;
       setTotalPages(Math.ceil(number_of_films / 40));

    }

    if (films == 1) {
        fetch("http://localhost:8080/all_films").then(response => response.json()).then((get_films) => setStates(get_films));
    }

    if (films.length > 0) {
        let array_end = (40 * page) - 1;
        let array_start = array_end - 39;
        let films_40 = films.slice(array_start, (array_end + 1));

        return (

            <div>
                <ListOfFilms name='All Films' films={films_40} class="hide-button" />
            </div>



        )


    }
}