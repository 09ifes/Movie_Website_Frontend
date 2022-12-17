import NavbarLinks from "../navbar_components/NavbarLinks";
import NavbarSearch from "../navbar_components/NavbarSearch";
export default Navbar;

function Navbar(props) {

    return (
        <div className="navbar">
            <div>
                <NavbarLinks />
            </div>
            <div>
                <NavbarSearch />
            </div>




        </div>
    )


}