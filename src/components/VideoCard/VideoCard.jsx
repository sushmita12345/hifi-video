// import google from "../../assets/Images/google.jpeg";
// import facebook from "../../assets/Images/facebook.jpeg";
// import amazon from "../../assets/Images/amazon.jpeg";
// import unacademy from "../../assets/Images/unacademy.jpeg";
// import cars24 from "../../assets/Images/cars24.jpeg";
import {MdiThumbUpOutline, MdiPlaylistPlus, IcRoundCircle} from "../../assets/Icon/Icon";
import { TitleSplice, DescriptionSplice, TimeStampConverter, ViewsConverter } from "../../Utils/index";
import "./VideoCard.css";


export function VideoCard({eachVideo}) {

    const {_id, title, videoLink, description, creator, categoryName, img, thumbnail, view, timeStamp} = eachVideo
    console.log(timeStamp)
   return (
       <div className="video-card-wrapper">
           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={thumbnail} alt="thumbnail" className="thumbnail-img"></img>
               </div>
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
           </header>

           {/* <header className="video-card-container">
               <div className="video-img-container">
                   <img src={facebook} alt="thumbnail" className="thumbnail-img"></img>
               </div>
               <div className="video-content-container">
                    <span className="video-card-content">Facebook Interview</span>
                    <div className="video-icons-container">
                        <MdiThumbUpOutline className="video-like-icon"/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                    </div>
               </div>
           </header>

           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={amazon} alt="thumbnail" className="thumbnail-img"></img>
               </div>
               <div className="video-content-container">
                    <span className="video-card-content">Amazon Interview</span>
                    <div className="video-icons-container">
                        <MdiThumbUpOutline className="video-like-icon"/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                    </div>
               </div>
           </header>

           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={unacademy} alt="thumbnail" className="thumbnail-img"></img>
               </div>
               <div className="video-content-container">
                    <span className="video-card-content">Unacademy Interview</span>
                    <div className="video-icons-container">
                        <MdiThumbUpOutline className="video-like-icon"/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                    </div>
               </div>
           </header>

           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={cars24} alt="thumbnail" className="thumbnail-img"></img>
               </div>
               <div className="video-content-container">
                    <span className="video-card-content">Cars24 Interview</span>
                    <div className="video-icons-container">
                        <MdiThumbUpOutline className="video-like-icon"/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                    </div>                   
               </div>
           </header> */}
       </div>
   ) 
}