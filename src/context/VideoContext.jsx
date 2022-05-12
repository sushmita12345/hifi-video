import {useReducer, createContext, useContext, useEffect, useState} from "react";
import { videoReducer } from "../reducer/VideoReducer";
import { ByCategoryName, FilterByCategory  } from "../Utils/index";
import axios from "axios";

const VideoContext = createContext();

const VideoProvider = ({children}) => {

    const initialState = {videos: [], categoryName: "ALL"}
    const [videoState, videoDispatch] = useReducer(videoReducer, initialState)
    const {videos, categoryName} = videoState;
    const [videoSearch, getvideoSearch] = useState("")

    useEffect(() => {
        (async () => {
            const {status, data: {videos},} = await axios.get("/api/videos")

            if(status === 200) {
                videoDispatch({type: "GET_VIDEOS", payload: videos})
            }
        })();
    },[]);

    const getCategoryByName = ByCategoryName(videos, "categoryName")

    const getFilterCategoryVideo = FilterByCategory(videos, categoryName)

    const getSortCategory = [...getFilterCategoryVideo].sort((a,b) => new Date(b.timeStamp) - new Date(a.timeStamp) )

    return (
        <VideoContext.Provider value = {{videoState, videoDispatch, getCategoryByName, getFilterCategoryVideo, getSortCategory, videoSearch, getvideoSearch}}>{children}</VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext)

export {useVideo, VideoProvider}

