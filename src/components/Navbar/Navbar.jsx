import { HashLink } from 'react-router-hash-link';
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav className="Navbar">
            <HashLink smooth to="/#home">
            	Home
            </HashLink>
            <HashLink smooth to="/#about">
            	About
            </HashLink>
            <HashLink smooth to="/#projects">
            	Projects
            </HashLink>
        </nav>
    )
}