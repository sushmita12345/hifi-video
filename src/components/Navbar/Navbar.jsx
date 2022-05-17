import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function Navbar() {
    const navigate = useNavigate();
    const {token, logoutFun} = useAuth();
    return (
        <div>
            <nav className="video-wrapper">
                <div className="video-navbar-container">
                    <Link to="/" className="underline-remove"><h1 className="video-logo">HIFI</h1></Link>
                    {/* <div className="video-searchbar-container">
                        <input type="text" className="video-searchbar" placeholder="Search"/>
                        <MdiMagnify className="video-magnify-search"/>
                    </div> */}
                    <button className="video-login-btn" onClick={() => {logoutFun(); navigate("/login")}}>{token ? "Logout" : "Login"}</button>
                </div>
            </nav>
        </div>
    )
}