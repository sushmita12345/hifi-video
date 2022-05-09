import "./CategoryFilterPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoCard } from "../../components/VideoCard/VideoCard";


export function CategoryFilterPage() {
    return (
        <div className="video-category-filter-container">
            <Sidebar />
            <div className="video-chips-container">
                <div className="video-chips-wrapper">
                    <div className="video-chips-content-wrapper">
                        <span className="video-chips-content">All</span>
                    </div>
                    <div className="video-chips-content-wrapper">
                        <span className="video-chips-content">Google</span>
                    </div>
                    <div className="video-chips-content-wrapper">
                        <span className="video-chips-content">Microsoft</span>
                    </div>
                    <div className="video-chips-content-wrapper">
                        <span className="video-chips-content">Amazon</span>
                    </div>
                    <div className="video-chips-content-wrapper">
                        <span className="video-chips-content">Unacademy</span>
                    </div>
                    <div className="video-chips-content-wrapper">
                        <span className="video-chips-content">Cars24</span>
                    </div>
                </div>

                <div>
                    <VideoCard />
                </div>
            </div>
        </div>
    )
}