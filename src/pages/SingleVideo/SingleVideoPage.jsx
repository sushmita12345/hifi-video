import { useNavigate, useParams } from "react-router";
import { VideoIframe } from "../../components/VideoIframe/VideoIframe";
import { useHistory, useAuth, useVideo } from "../../context/index";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {MdiThumbUp, MdiPlaylistPlus, MdiClock, IcOutlineVisibility} from "../../assets/Icon/Icon"
import "./SingleVideoPage.css"

export function SingleVideoPage() {

    // const {token} = useAuth();
    // const navigate = useNavigate()

    const {getFilterCategoryVideo} = useVideo();
    // console.log(getFilterCategoryVideo)
    const videoId = useParams()

    const getVideo = getFilterCategoryVideo?.find((eachVideo) => eachVideo._id === videoId)

    return (
        getFilterCategoryVideo && (
            <>
                <div className="video-category-filter-container">
                    <Sidebar />
                    <div>
                        <div>                           
                            <div className="single-video-iframe-container">
                                <iframe className="single-video-iframe"
                                    src="https://www.youtube.com/embed/kDd33VxaxaY"

                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    // frameborder="0"
                                    // allow="autoplay; encrypted-media"
                                    // allowfullscreen
                                    // title="video"
                                />
                                <h2 className="iframe-video-title">Google Frontend Interview questions</h2>
                                <div className="video-iframe-content-container">
                                    <div className="video-iframe-views-title">
                                        <div className="video-iframe-view-container">
                                            <IcOutlineVisibility />
                                            <span>500k views</span>
                                        </div>
                                        
                                        <span className="video-iframe-title">Coding Nomad</span>
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
                                <p className="video-iframe-description">Description: Prepare for the Google Frontend Phone Interview with me!</p>

                                {/* <VideoIframe videoId={getVideo?._id} /> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
        
    )
}