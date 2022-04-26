import {Link} from "react-router-dom";
import "./LandingPage.css";

export function LandingPage() {
    return (
        <>
        <main className="video-main-wrapper">
            <div className="video-main-container">
                <div className="video-content-wrapper">
                    <p className="cover-content-a">Welcome To HIFI</p>
                    <p className="cover-content-b">
                    Get all video for Frontend Interview
                    </p>
                    <Link to="/category"><button class="video-explore-btn">Explore</button></Link>
                </div>
            </div>
        </main>
        
        </>
    )
}