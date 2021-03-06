import {MdiThumbUp, MdiPlaylistPlus, IcRoundCircle, MdiClock} from "../../assets/Icon/Icon";
import { TitleSplice, TimeStampConverter } from "../../Utils/index";
import "./VideoCard.css";
import { useHistory, useAuth, useLike } from "../../context/index";
import { useNavigate } from "react-router";
import { useVideo } from "../../context/VideoContext";
import { useWatchLater } from "../../context/WatchLater";


export function VideoCard({eachVideo}) {

    const {_id, title, creator, img, thumbnail, view, timeStamp} = eachVideo
    const {addHistoryVideo} = useHistory();
    const navigate = useNavigate();
    const {token} = useAuth();
    const {likeState: {likedVideo}, likedVideoSave, likedVideoRemove} = useLike()
    const {videoState: {videos}} = useVideo();
    const {watchState: {watchlater}, addWatchLater, removeWatchLater} = useWatchLater();

    const singleVideo = () => {
        navigate(`/video/${_id}`)
        if(token) {
            addHistoryVideo(eachVideo)
        }
    }

    function findVideo(id) {
        const currentVideo = videos.find((video) => video._id === id);
        return currentVideo;
      }
    const playingVideo = findVideo(eachVideo._id)

    const likedVideoHandler = () => {
        if(token) {
            if(likedVideo.some((video) => video._id === eachVideo._id)){
                likedVideoRemove(playingVideo)
            } else {
                likedVideoSave(playingVideo)
            }
        }else{
            navigate("/login")
        }
    }

    const watchLaterHandler = () => {
        if(token) {
            if(watchlater.some((video) => video._id === eachVideo._id)){
                removeWatchLater(playingVideo)
            }else {
                addWatchLater(playingVideo)
            }
        }
    }
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
                        <MdiThumbUp onClick={() => likedVideoHandler()} className={likedVideo.some((video) => video._id === eachVideo._id) ? "video-like-icon-color" : "video-like-icon" }/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                        <MdiClock onClick={() => watchLaterHandler()} className={watchlater.some((video) => video._id === eachVideo._id) ? "video-watch-icon-color" : "video-watch-icon"}/>
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