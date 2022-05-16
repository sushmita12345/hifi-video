import {MdiHome, MdiYoutubeSubscription, MdiHistory, MdiThumbUp, MdiClock, IcRoundExplore} from "../../assets/Icon/Icon";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

export function Sidebar() {
    const {token} = useAuth()
    const navigate = useNavigate()
    return(
        <div className="video-sidebar-container">
            <Link to="/" className="video-sidebar-link"><div className="video-sidebar-icon-container">
                <MdiHome className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Home</span>
            </div></Link>
            <Link to="/category" className="video-sidebar-link"><div className="video-sidebar-icon-container">
                <IcRoundExplore className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Explore</span>
            </div></Link>
            <div className="video-sidebar-icon-container">
                <MdiYoutubeSubscription className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Playlist</span>
            </div>
            <div className="video-sidebar-icon-container" onClick={() => {!token ? navigate("/login") : navigate("/history")}}>
                <MdiHistory className="video-sidebar-icon"/>
                <span className="video-sidebar-content">History</span>
            </div>
            <div className="video-sidebar-icon-container">
                <MdiThumbUp className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Like</span>
            </div>
            <div className="video-sidebar-icon-container">
                <MdiClock className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Watch Later</span>
            </div>
        </div>
    )

}