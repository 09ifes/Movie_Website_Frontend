

export default function NavbarLinks(props) {
    return (
        <div id='navbar-links'>
            <a className="logo" href='/'>Film4View</a>
            <ul id="navbar-ul">
                <li>
                    <a className="navbar-links" href='/'>Home</a>
                </li>
                <li>
                    <a className="navbar-links" href='/view-all/all-films'>Categories</a>
                </li>
                <li>
                    <a className="navbar-links" href='/film/add-film'>Add Film</a>
                </li>
                <li>
                    <a className="navbar-links" href='/'>Login</a>
                </li>
            
            </ul>
        </div>
    )
}