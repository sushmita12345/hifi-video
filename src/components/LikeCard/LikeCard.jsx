import {useNavigate} from "react-router-dom"
import {IcRoundClose, IcRoundCircle} from "../../assets/Icon/Icon";
import {TitleSplice, TimeStampConverter} from "../../Utils/index"
import { useHistory } from "../../context";
import { useLike } from "../../context";
import "./LikeCard.css";

export function LikeCard({eachVideo}) {

    const {_id, thumbnail, title, img, creator, view, timeStamp} = eachVideo
    const {addHistoryVideo} = useHistory();
    const {likedVideoRemove} = useLike();
    const navigate = useNavigate()

    const singleVideo = (_id) => {
        navigate(`/video/${_id}`)
        addHistoryVideo(eachVideo)
    }
    return (
        <div className="video-card-wrapper">
           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={thumbnail} alt={title} className="thumbnail-img" onClick={() => singleVideo(_id)}></img>
               </div>
               <IcRoundClose className="video-like-remove" onClick={() => likedVideoRemove(eachVideo._id)}/>
               <div className="video-content-container">
                    <div className="video-avatar-title-wrapper">
                        <img src={img} alt="avatar" className="video-card-creator-img"/>
                        <span className="video-card-content">{TitleSplice(title)}</span>
                    </div>
               </div>
               <div className="video-creator-views-date-wrapper">
                   <span className="video-creator">{creator}</span>
                   <div className="video-views-time-wrapper">
                        <span className="video-views">{view} views</span>
                        <IcRoundCircle className="video-circle"/>
                        <span className="video-time">{TimeStampConverter(timeStamp)}</span>
                    </div>
               </div>
           </header>
       </div>
    )
}