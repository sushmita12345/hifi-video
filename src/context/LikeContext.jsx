import { useContext, createContext, useReducer, useEffect } from "react";
import { LikeReducer } from "../reducer/LikeReducer";
import {useAuth} from "./index";
import axios from "axios";

const LikeContext = createContext()

const LikeProvider = ({children}) => {
    const [likeState, likeDispatch] = useReducer(LikeReducer, {likedVideo: []})
    const {likedVideo} = likeState;
    const {token} = useAuth()
    

    useEffect(() => {
        if(token) {
            (async () => {
                try {
                    const {status, data: {likes}} = await axios.get("/api/user/likes", {
                        headers: {
                            authorization: token
                        }
                    })

                    if(status === 200) {
                        likeDispatch({type: "ALL_LIKED_VIDEO", payload: likes})
                    }
                }catch(error) {
                    console.error(error.response)
                }
            })()
        }else {
            likeDispatch({type: "ALL_LIKED_VIDEO", payload: []})
        }
    },[token])

    const likedVideoSave = async (video) => {
        if(likedVideo.find((eachVideo) => eachVideo._id === video._id)){
            console.log("Video already liked")
            return
        } else {
            try {
                const {status, data: {likes}} = await axios.post("/api/user/likes", {video},{
                    headers: {
                        authorization: token
                    }
                })
                if(status === 201){
                    likeDispatch({type: "SAVE_LIKED_VIDEO", payload: likes})
                }
            }catch(error) {
                console.error(error.response)
            }
        }
    }

    const likedVideoRemove = async (videoId) => {
        if(likedVideo.find((eachVideo) => eachVideo._id === videoId)){
            try {
                const {status, data: {likes}} = await axios.delete(`/api/user/likes/${videoId}`, {
                    headers: {
                        authorization: token
                    }
                })
                if(status === 200) {
                    likeDispatch({type: "REMOVE_LIKED_VIDEO", payload: likes})
                }
            }catch(error){
                console.error(error.response)
            }
        }
    }

    return (
        <LikeContext.Provider value={{likeState, likeDispatch, likedVideoSave, likedVideoRemove}}>{children}</LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext)

export {useLike, LikeProvider}