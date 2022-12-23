import PartialFilmDetails from "./PartialFilmDetails"

export default function ListOfFilms(props) {
    let components = [];
    for (var i = 0; i < props.films.length; i++) {
        components.push(<PartialFilmDetails data={props.films[i]}/>);
      }

    return (
        <div>
            <h1 data-cy={props.cy1} class='list-of-films-title'>{props.name}</h1>
            <div class='list-of-films'>
                {components}
                
            </div>
            <a data-cy={props.cy} className={"navbar-links " + props.class} href={props.link}>View More</a>
        </div>

    )

}