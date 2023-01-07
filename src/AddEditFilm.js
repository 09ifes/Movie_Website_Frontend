import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function AddEditFilm(props) {
    const [film, setFilm] = useState(1)
    const { name, id } = useParams();
    const navigate = useNavigate();
    let title = "Add Film"  // default
    let URL = "http://localhost:8080"

    if (name == "edit") {
        title = "Edit Film"
    }

    function addOrEdit() {

        let title = document.getElementById('film-title-form').value
        let description = document.getElementById('film-description-form').value
        let img_url = document.getElementById('film-img-form').value
        let vid_url = document.getElementById('film-video-form').value

        let input = '{\"title\": \"' + title + '", ' +
            '\"description\": \"' + description + '", ' +
            '\"img_url\": \"' + img_url + '", ' +
            '\"vid_url\": \"' + vid_url + '"}';
        const data = JSON.stringify(input);

        console.log(data)

        if (name == "edit") {
            fetch(URL + '/edit_film/' + id, {
                method: 'put',
                body: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

            }).then(() =>  navigate('/view-film/' + id))
        }

        else {
            fetch(URL +'/add_film', {
                method: 'post',
                body: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

            }).then(() =>  navigate('/view-all/all-films'))

        }

        console.log(title)
        console.log(description)
        console.log(img_url)
        console.log(vid_url)
    }


    return (

        <div id='film-form-div'>
            <h1 id="film-form-h1" class='list-of-films-title'>{title}</h1>
            <form id="film-form" >
                <div class='film-input'>
                    <p class='form-label'>Title</p>
                    <input id='film-title-form' type="text" />
                </div>
                <div class='film-textarea-input'>
                    <p class='form-label'>Description</p>
                    <textarea id='film-description-form' type="text" />
                </div>
                <div className="film-input">
                    <p class='form-label'>Image URL</p>
                    <input id='film-img-form' type="text" />
                </div>
                <div class='film-input'>
                    <p class='form-label'>Video URL</p>
                    <input id='film-video-form' type="text" />
                </div>
                <button class='form-search-button' type="button" onClick={() => addOrEdit()} >Submit</button>


            </form>

        </div>



    )

}