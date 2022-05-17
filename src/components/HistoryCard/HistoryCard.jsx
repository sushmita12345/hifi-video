import {IcRoundCircle, IcRoundClose} from "../../assets/Icon/Icon";
import { TitleSplice, TimeStampConverter } from "../../Utils/index";
import "./HistoryCard.css";
import { useHistory } from "../../context";


export function HistoryCard({eachVideo}) {

    const {_id, title, creator, img, thumbnail, view, timeStamp} = eachVideo
    const {removeHistory}  = useHistory()
   return (
       <div className="video-card-wrapper">
           <header className="history-video-card-container">
               <div className="video-history-img-container">
                   <img src={thumbnail} alt="thumbnail" className="history-thumbnail-img"></img>
               </div>
               <div className="history-horizontal-content-wrapper">

                    <div className="video-content-history-container">
                        <div className="video-avatar-title-wrapper">
                            <img src={img} alt="avatar" className="video-card-creator-img"/>
                            <span className="video-card-content">{TitleSplice(title)}</span>
                        </div>
                        <div className="video-history-icons-container">
                            <IcRoundClose className="video-history-clear-icon" onClick={() => removeHistory(_id)}/>
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