import ListOfFilms from "./universal_components/ListOfFilms";
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
    
    // executes after data has been fully loaded into state arrays, to prevent undefined variables
    if (allFilms.length > 0 && mostPopular.length > 0 && mostRecent.length > 0){
        let allFilms_20 = allFilms.slice(0,20);
        let mostPopular_20 = mostPopular.slice(0,20);
        let mostRecent_20 = mostRecent.slice(0,20);

        return (
            <div id='homepage'>
                <div id='homepage-all-films'>
                    <ListOfFilms name='All Films' films={allFilms_20} class="view-more-button" />
                </div>
                <div id='homepage-most-popular'>
                    <ListOfFilms name='Most Popular' films={mostPopular_20} class="view-more-button" />
                </div>
                <div id='homepage-most-recent'>
                    <ListOfFilms name='Most Recent' films={mostRecent_20} class="view-more-button" />
                </div>
    
    
            </div>
    
    
    
        )
        
        
}



     
    

}