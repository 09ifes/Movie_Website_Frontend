import Navbar from "./universal_components/Navbar";
import ListOfFilms from "./universal_components/ListOfFilms";

export default function HomePage() {

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




        </div>



    )

}