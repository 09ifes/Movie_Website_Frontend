import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function AddEditFilm(props) {

    const { name, id } = useParams();
    let title = "Add Film"

    if (name == "edit"){
        title = "Edit Films"
    }

    return (

        <div id='film-form-div'>
            <h1 class='list-of-films-title'>{title}</h1>
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
                    <input id='film-vid-form' type="text" />
                </div>
                <button class='form-search-button' type="button" >Submit</button>


            </form>

        </div>



    )

}