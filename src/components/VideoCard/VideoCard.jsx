import {MdiThumbUpOutline, MdiPlaylistPlus, IcRoundCircle, MdiHistory} from "../../assets/Icon/Icon";
import { TitleSplice, TimeStampConverter } from "../../Utils/index";
import "./VideoCard.css";
import { useHistory } from "../../context/HistoryContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";


export function VideoCard({eachVideo}) {

    const {_id, title, creator, img, thumbnail, view, timeStamp} = eachVideo
    const {addHistoryVideo} = useHistory();
    const navigate = useNavigate();
    const {token} = useAuth()

    const singleVideo = () => {
        navigate(`/video/${_id}`)
        if(token) {
            addHistoryVideo(eachVideo)
            // console.log(eachVideo)
        }
    }

    // console.log(timeStamp)
   return (
       <div className="video-card-wrapper">
           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={thumbnail} alt={title} className="thumbnail-img" onClick={() => singleVideo()}></img>
               </div>
               <div className="video-content-container">
                    <div className="video-avatar-title-wrapper">
                        <img src={img} alt="avatar" className="video-card-creator-img"/>
                        <span className="video-card-content">{TitleSplice(title)}</span>
                    </div>
                    <div className="video-icons-container">
                        <MdiThumbUpOutline className="video-like-icon"/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                        {/* <MdiHistory onClick={() => }/> */}
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