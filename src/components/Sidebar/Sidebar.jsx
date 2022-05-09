import {MdiHome, MdiYoutubeSubscription, MdiHistory, MdiThumbUp, MdiClock} from "../../assets/Icon/Icon";
import "./Sidebar.css";

export function Sidebar() {
    return(
        <div className="video-sidebar-container">
            <div className="video-sidebar-icon-container">
                <MdiHome className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Home</span>
            </div>
            <div className="video-sidebar-icon-container">
                <MdiYoutubeSubscription className="video-sidebar-icon"/>
                <span className="video-sidebar-content">Playlist</span>
            </div>
            <div className="video-sidebar-icon-container">
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