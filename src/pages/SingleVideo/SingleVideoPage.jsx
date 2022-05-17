import { useParams } from "react-router";
// import { VideoIframe } from "../../components/VideoIframe/VideoIframe";
import { useVideo } from "../../context/index";
import { Sidebar } from "../../components/index";
import {MdiThumbUp, MdiPlaylistPlus, MdiClock, IcOutlineVisibility} from "../../assets/Icon/Icon"
import "./SingleVideoPage.css"

export function SingleVideoPage() {

    const {getFilterCategoryVideo} = useVideo();
    const {videoId} = useParams()
    

    const getVideo = getFilterCategoryVideo.find(
        (eachVideo) => eachVideo._id === videoId
    );
    console.log(getVideo)

    return (
        getFilterCategoryVideo && (
            <>
                <div className="video-category-filter-container">
                    <Sidebar />
                    <div>
                        <div>   
                            <div className="single-video-iframe-container">
                                {/* <VideoIframe videoId={getVideo?._id} /> */}
                                <iframe className="single-video-iframe"
                                    src={`https://www.youtube.com/embed/${getVideo?._id}`}
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
                                <div className="video-iframe-content-wrapper">
                                    <h2 className="iframe-video-title">{getVideo?.title}</h2>
                                    <div className="video-iframe-content-container">
                                        <div className="video-iframe-views-title">
                                            <div className="video-iframe-view-container">
                                                <IcOutlineVisibility />
                                                <span>{getVideo?.view} views</span>
                                            </div>
                                            
                                            <span className="video-iframe-title">{getVideo?.creator}</span>
                                        </div>
                                        
                                        <div className="video-iframe-button-container">
                                            <button className="iframe-button-style">
                                                <MdiThumbUp />
                                                <span>Like</span>
                                            </button>
                                            <button className="iframe-button-style">
                                                <MdiClock />
                                                <span>Watch Later</span>
                                            </button>
                                            <button className="iframe-button-style">
                                                <MdiPlaylistPlus />
                                                <span>Add to Playlist</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="video-iframe-description"><span className="video-description" >Description: </span>{getVideo?.description}</p>
                                </div>
                                

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
        
    )
}