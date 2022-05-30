import {Sidebar} from "../../components/index";
import { useWatchLater } from "../../context/WatchLater";
import { WatchLaterCard } from "../../components/WatchLaterCard/WatchLaterCard";

export function WatchLaterPage() {
    const {watchState: {watchlater}} = useWatchLater()
    return (
        <div className="video-category-filter-container">
            <Sidebar />
            <div className="video-chips-container">
                <div className="video-history-length-container">
                    <span className="video-history-length">WatchLater({watchlater?.length})</span>
                    
                </div>
                <div className="videoCard-main-wrapper">
                
                    {watchlater?.map((eachVideo) => <WatchLaterCard eachVideo={eachVideo} key={eachVideo._id}/>)}
                    
                </div>
            </div>
        </div>
    )
}