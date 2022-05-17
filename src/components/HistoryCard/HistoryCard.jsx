import {MdiThumbUpOutline, MdiPlaylistPlus, IcRoundCircle} from "../../assets/Icon/Icon";
import { TitleSplice, TimeStampConverter } from "../../Utils/index";
import "./HistoryCard.css"

// import "./VideoCard.css";


export function HistoryCard({eachVideo}) {

    const {title, creator, img, thumbnail, view, timeStamp} = eachVideo
    // console.log(timeStamp)
   return (
       <div className="video-card-wrapper">
           <header className="history-video-card-container">
               <div className="video-img-container">
                   <img src={thumbnail} alt="thumbnail" className="history-thumbnail-img"></img>
               </div>
               <div>

                    <div className="video-content-container">
                            <div className="video-avatar-title-wrapper">
                                <img src={img} alt="avatar" className="video-card-creator-img"/>
                                <span className="video-card-content">{TitleSplice(title)}</span>
                            </div>
                            <div className="video-icons-container">
                                <MdiThumbUpOutline className="video-like-icon"/>
                                <MdiPlaylistPlus className="video-play-icon"/>
                                
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
                </div>
           </header>
       </div>
   ) 
}