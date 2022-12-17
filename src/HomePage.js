import Navbar from "./universal_components/Navbar";
import ListOfFilms from "./universal_components/ListOfFilms";
import Footer from "./universal_components/Footer";
import React, { useEffect, useState } from 'react';

export default function HomePage(props) {
    const [allFilms, setAllFilms] = useState(1);
    const [mostPopular, setMostPopular] = useState(1);
    const [mostRecent, setMostRecent] = useState(1);
    
    if (allFilms == 1){
        fetch("http://localhost:8080/all_films").then(response => response.json()).then((all_films) => setAllFilms(all_films));
        fetch("http://localhost:8080/most_popular").then(response => response.json()).then((most_popular) => setMostPopular(most_popular));
        fetch("http://localhost:8080/most_recent").then(response => response.json()).then((most_recent) => setMostRecent(most_recent));
    }

    
    console.log(allFilms);
    console.log(mostPopular);
    console.log(mostRecent);
     
    return (
        <div id='homepage'>
            <div>
                <Navbar />
            </div>
            <div id='homepage-all-films'>
                <ListOfFilms name='All Films'/>
            </div>
            <div id='homepage-most-popular'>
                <ListOfFilms name='Most Popular'/>
            </div>
            <div id='homepage-most-recent'>
                <ListOfFilms name='Most Recent'/>
            </div>
            <div>
                <Footer/>
            </div>




        </div>



    )

}