import "./Navbar.css";
import {Link} from "react-router-dom"

export function Navbar() {
    return (
        <div>
            <nav className="video-wrapper">
                <div className="video-navbar-container">
                    <Link to="/" className="underline-remove"><h1 className="video-logo">HIFI</h1></Link>
                    {/* <div className="video-searchbar-container">
                        <input type="text" className="video-searchbar" placeholder="Search"/>
                        <MdiMagnify className="video-magnify-search"/>
                    </div> */}
                    <button className="video-login-btn">Login</button>
                </div>
            </nav>
        </div>
    )
}