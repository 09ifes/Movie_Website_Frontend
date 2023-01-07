import ListOfFilms from "./universal_components/ListOfFilms";
import React, { useEffect, useState } from 'react';

export default function HomePage(props) {
    const [allFilms, setAllFilms] = useState(1);
    const [mostPopular, setMostPopular] = useState(1);
    const [mostRecent, setMostRecent] = useState(1);
    let URL = "http://localhost:8080"
   
    
    if (allFilms == 1){
        fetch(URL + "/all_films").then(response => response.json()).then((all_films) => setAllFilms(all_films));
        fetch(URL + "/most_popular").then(response => response.json()).then((most_popular) => setMostPopular(most_popular));
        fetch(URL + "/most_recent").then(response => response.json()).then((most_recent) => setMostRecent(most_recent));
    }
    
    // executes after data has been fully loaded into state arrays, to prevent undefined variables
    if (allFilms.length > 0 && mostPopular.length > 0 && mostRecent.length > 0){
        let allFilms_20 = allFilms.slice(0,20);
        let mostPopular_20 = mostPopular.slice(0,20);
        let mostRecent_20 = mostRecent.slice(0,20);

        return (
            <div id='homepage'>
                <div id='homepage-all-films'>
                    <ListOfFilms cy='all-films-view-more' cy1='home-all-films-title' name='All Films' films={allFilms_20} class="view-more-button" link="/view-all/all-films"/>
                </div>
                <div id='homepage-most-popular'>
                    <ListOfFilms cy='most-popular-view-more' cy1='home-most-popular-title' name='Most Popular' films={mostPopular_20} class="view-more-button" link="/view-all/most-popular" />
                </div>
                <div id='homepage-most-recent'>
                    <ListOfFilms cy='most-recent-view-more' cy1='home-most-recent-title' name='Most Recent' films={mostRecent_20} class="view-more-button" link="/view-all/most-recent" />
                </div>
    
    
            </div>
    
    
    
        )
        
        
}



     
    

}