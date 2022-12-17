import NavbarLinks from "../navbar_components/NavbarLinks";

export default Navbar;

function Navbar(props) {

    return (
        <div className="navbar">
            <div id='navbar-links'>
                <NavbarLinks />
            </div>

            <div id='navbar-search'>
                <form id="navbar-form" >
                    <input id='navbar-input' type="text" />
                        <button id='navbar-search-button' type="submit">Search</button>
                </form>
            </div>



        </div>
    )


}