import {Link} from "react-router-dom"

function Header() {
    return (
      <div class="header">
        <nav class="nav">
            <ul class="nav-list">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Search">Search</Link></li>
                <li><Link to="/Create">Create</Link></li>
                <li><Link to="/Policy">Policy</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
      </div>
    )
}

export default Header;