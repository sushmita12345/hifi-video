import google from "../../assets/Images/google.jpeg";
import facebook from "../../assets/Images/facebook.jpeg";
import amazon from "../../assets/Images/amazon.jpeg";
import unacademy from "../../assets/Images/unacademy.jpeg";
import cars24 from "../../assets/Images/cars24.jpeg";
import {MdiThumbUpOutline, MdiPlaylistPlus} from "../../assets/Icon/Icon";
import "./VideoCard.css";


export function VideoCard() {
   return (
       <div className="video-card-wrapper">
           <header className="video-card-container">
               <div className="video-img-container">
                   <img src={google} alt="thumbnail" className="thumbnail-img"></img>
               </div>
               <div className="video-content-container">
                    <span className="video-card-content">Google Interview</span>
                    <div className="video-icons-container">
                        <MdiThumbUpOutline className="video-like-icon"/>
                        <MdiPlaylistPlus className="video-play-icon"/>
                    </div>
               </div>
           </header>

           <header className="video-card-container">
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
           </header>
       </div>
   ) 
}