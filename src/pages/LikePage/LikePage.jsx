import { Sidebar, LikeCard } from "../../components/index";
import {useLike} from "../../context/LikeContext"

export function LikePage() {

    const {likeState: {likedVideo}} = useLike()
    return (
        <div className="video-category-filter-container">
            <Sidebar />
            <div className="video-chips-container">
                <div className="video-history-length-container">
                    <span className="video-history-length">Likes({likedVideo?.length})</span>
                    
                </div>
                <div className="videoCard-main-wrapper">
                
                    {likedVideo?.map((eachVideo) => <LikeCard eachVideo={eachVideo} key={eachVideo._id}/>)}
                    
                </div>
            </div>
        </div>
    )
}