import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function NavbarSearch(props) {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(0);

    const search = () => {

        let input = document.getElementById("navbar-input").value
        navigate('/view-all/search-films',
            {
                state: input
            });
        window.location.reload(false); //refresh page
    }

    return (
        <div id='navbar-search'>
            <form id="navbar-form" >
                <input id='navbar-input' type="text" />
                <button data-cy='search-button-navbar' id='navbar-search-button' type="button" onClick={() => search()}>Search</button>

            </form>

        </div>
    )
}
