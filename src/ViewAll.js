import ListOfFilms from "./universal_components/ListOfFilms"
import GenreButtons from "./universal_components/GenreButtons";
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function ViewAll(props) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [films, setFilms] = useState(1);
    const [apiData, setApiData] = useState(1); // stores original returned data from api call
    const [search, setSearch] = useState(1);

    const { filter } = useParams();   // url parameter 
    const searchInput = useLocation();   // stores value sent from NavbarSearch component
    

    let URL = "http://localhost:8080"
    let url = URL + "/all_films";
    let name = "All Films"; // default value

    // variables used to determine the class for the page buttons
    let showButton1 = "show-button";
    let showButton2 = "show-button";

    function setStates(get_films) {
        setFilms(get_films);
        setApiData(get_films);  // this variable gets referenced when filtering instead of films variable, because it remains unaltered
        let number_of_films = get_films.length;
        setTotalPages(Math.ceil(number_of_films / 40));
    }

    function filterResults() {
        let genreDiv = ["Action", "Animation", "Children", "Classics", "Comedy", "Documentary",
            "Drama", "Family", "Foreign", "Games", "Horror", "Music", "New", "Sci-Fi", "Sports", "Travel"]

        let category = 'Action';
        let filteredResults = []

        // sets category based on what's selected
        for (let i = 0; i < genreDiv.length; i++) {
            let radioButton = document.getElementById(genreDiv[i]).checked
            if (radioButton) {
                category = genreDiv[i]
            }  
        }

        // filters data and adds to array
        for (let i = 0; i < apiData.length; i++) {
            if (apiData[i].name == category){
                filteredResults.push(apiData[i])
            }
        }      
        setFilms(filteredResults)  // updates film state variable
        let number_of_films = filteredResults.length;
        setTotalPages(Math.ceil(number_of_films / 40))
        setPage(1);     // goes to page 1 of filtered results
    }


    // will adjust the name variable and the api url based on the url paramater 'filter'
    if (filter == "most-popular") {
        url = URL + "/most_popular";
        name = "Most Popular";

    }
    else if (filter == "most-recent") {
        url = URL + "/most_recent";
        name = "Most Recent";
    }
    else if (filter == "search-films") {
        name = "Search Results";
    }


    // if on first or last page, hides the arrow buttons accordingly
    if (page == totalPages) {
        showButton2 = "hide-button"
    }
    if (page == 1) {
        showButton1 = "hide-button"
    }
    if (films == 1) {
        if (filter == "search-films") {

            let input = '{\"title\": \"' + searchInput.state + '"}';
            const data = JSON.stringify(input);
            fetch(URL + '/search_films', {
                method: 'post',
                body: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },}).then(response => response.json()).then((get_films) => setStates(get_films))
        }
        else {
            fetch(url).then(response => response.json()).then((get_films) => setStates(get_films));
        }
    }

    // executes after data has been fully loaded into state array, to prevent undefined variables
    if (films.length > 0) {
        // determiens which range of data to display based on the page number
        let array_end = (40 * page) - 1;
        let array_start = array_end - 39;
        let films_40 = films.slice(array_start, (array_end + 1));

        return (
            <div>
                <div>
                    <GenreButtons onClick={() => filterResults()} />
                </div>
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
    else {
        return (
            <div>
                <div>
                    <GenreButtons onClick={() => filterResults()} />
                </div>
                <div>
                    <h1 class='list-of-films-title'>No Results</h1>
                </div>
            </div>
        )
    }
}