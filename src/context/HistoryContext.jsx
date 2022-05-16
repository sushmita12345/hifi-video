import {useContext, useReducer, createContext, useEffect} from 'react';
import { useAuth } from './AuthContext';
import {HistoryReducer} from "../reducer/HistoryReducer";
import axios from 'axios';


const HistoryContext = createContext();

const HistoryProvider = ({children}) => {
    const {token} = useAuth()
    const [historyState, historyDispatch] = useReducer(HistoryReducer, {historyVideo: []})
    const {historyVideo} = historyState;
    
    useEffect(() => {
        if(token) {
            (async () => {
                try {
                    const {data: {history}, status} = await axios.get("api/user/history", {
                        headers: {
                            authorization: token
                        }
                    }) 
                    if(status === 200) {
                        historyDispatch({type: "SAVED_VIDEO_HISTORY", payload:history})
                    }
                }catch (error) {
                    console.log(error.response)
                }
            })()
        } else {
            historyDispatch({type: "SAVED_VIDEO_HISTORY", payload: []})
        }
    },[token])

    const addHistoryVideo = async (video) => {
        if(historyVideo.find((eachVideo) => eachVideo._id === video._id)){
            removeHistory(video.id)
        } else {
            try {
                const {status, data: {history},} = await axios.post("/api/user/history", {video},
                    {
                        headers: {
                            authorization:token
                        }
                    }
                )
                if(status === 201){
                    historyDispatch({type: "SAVED_VIDEO_HISTORY", payload: history})
                }
            }catch(error) {
                console.log(error.response)
            }
        }
    }

    const removeHistory = async (videoId) => {
        try {
            const {status, data: {history}} = await axios.delete(`/api/user/history/${videoId}`, 
            {
                headers: {
                    authorization: token
                }
            })

            if(status === 200){
                historyDispatch({type: "REMOVE_SINGLE_VIDEO_HISTORY", payload: history})
            }
        } catch(error){
            console.log(error.response)
        }
    }

    const removeAllHistory = async () => {
        if(token) {
            try {
                const {status, data: {history}} = await axios.delete("/api/user/history/all", {
                    headers: {
                        authorization: token
                    }
                })

                if(status === 200) {
                    historyDispatch({type: "CLEAR_VIDEO_HISTORY", payload: history})
                }
            }catch(error){
                console.log(error.response)
        } 
        }
    }

    return (
        <HistoryContext.Provider value={{historyState, historyDispatch, addHistoryVideo, removeHistory, removeAllHistory}}>{children}</HistoryContext.Provider>
    )

}

const useHistory = () => useContext(HistoryContext)
export {useHistory, HistoryProvider}