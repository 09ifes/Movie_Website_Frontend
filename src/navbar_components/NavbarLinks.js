

export default function NavbarLinks(props) {
    return (
        <div>
            <h1 className="logo">Film4View</h1>
            <ul id="navbar-ul">
                <li>
                    <a className="navbar-links" href='#'>Home</a>
                </li>
                <li>
                    <a className="navbar-links" href='#'>Genre</a>
                </li>
                <li>
                    <a className="navbar-links" href='#'>All Films</a>
                </li>
                <li>
                    <a className="navbar-links" href='#'>Login</a>
                </li>
                <li>
                    <a className="navbar-links" href='#'>Register</a>
                </li>
            </ul>
        </div>
    )
}