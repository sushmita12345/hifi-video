import "./CategoryFilterPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext";


export function CategoryFilterPage() {

    const {getCategoryByName, getFilterCategoryVideo, videoDispatch, videoSearch} = useVideo()

    console.log(getCategoryByName)
    return (
        <div className="video-category-filter-container">
            <Sidebar />
            <div className="video-chips-container">
                <div className="video-chips-wrapper">
                    <div className="video-chips-content-wrapper">
                        <button className="video-chips-content" onClick={() => videoDispatch({type: "GET_ALL_VIDEO"})}>All</button>
                    </div>
                    <div className="video-chips-content-wrapper video-chips-gap">
                        {getCategoryByName?.map((eachCatVideo, i) => <button className="video-chips-content" onClick={() => videoDispatch({type: "GET_VIDEOS_BY_CATEGORY_NAME", payload: eachCatVideo})} key={i}>{eachCatVideo}</button>)}
                    </div>
                </div>

                <div className="videoCard-main-wrapper">

                    {getFilterCategoryVideo?.length === 0 ? <p>No Video</p> : getFilterCategoryVideo?.filter((eachVideo) => {
                        if(videoSearch === ""){
                            return eachVideo
                        } else if(eachVideo.title.toLowerCase().includes(videoSearch.toLowerCase())){
                            return eachVideo
                        }
                    }).map((eachVideo) => <VideoCard eachVideo={eachVideo} key={eachVideo.id}/>)}
                    
                </div>
            </div>
        </div>
    )
}