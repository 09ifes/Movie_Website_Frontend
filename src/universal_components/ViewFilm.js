import ListOfFilms from "./ListOfFilms"


export default function ViewFilm(props) {
    return (
        <div id="view-film">

            <iframe id="view-film-video"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <div id="view-film-details">
                <img className="view-film-image" src="https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg"></img>
                <div id="view-film-information">
                    <h1 class='film-details-title'>Film Title</h1>
                    <h4>Rating: </h4>
                    <p>Description Description Description Description Description Description Description Description Description  </p>
                    <p>Genre:</p>
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