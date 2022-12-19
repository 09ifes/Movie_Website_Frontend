

export default function GenreButtons() {

    let genreButtonsDiv = [];
    let genreDiv = ["Action", "Animation", "Children", "Classics", "Comedy", "Documentary",
        "Drama", "Family", "Foreign", "Games", "Horror", "Music", "New", "Sci-Fi", "Sports", "Travel"]

    for (var i = 0; i < 16; i++) {
        let genreName = genreDiv[i];
        genreButtonsDiv.push(<div class='genre-radio-divs'>
            <input type="radio" class='genre-radio-buttons' id={genreName} name="genre_set" value={genreName} />
            <label className="genre-labels" for={genreName}>{genreName}</label> <br /><br />
        </div>);
    }

    return (
        <div>
            <div className="genre-radio-main-div">
                <h2 className="list-of-films-title">Filter By Category</h2>
                <form >
                    <div id='genres-div1'>
                        {genreButtonsDiv}
                    </div>
                </form>
                <input id='genre-submit' type="button" name="submit" value="Filter" onclick="submitData()" />
            </div>
        </div>
    )

}