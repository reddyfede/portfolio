import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="Header">
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
            <Link to="/projects">
                <div>PROJECTS</div>
            </Link>
        </div>
    )
}