import {createContext, useContext, useReducer, useEffect} from "react";
import {WatchLaterReducer} from "../reducer/WatchLaterReducer";
import {useAuth} from "./AuthContext";
import axios from "axios";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) => {
    const [watchState, watchDispatch] = useReducer(WatchLaterReducer, {watchlater: []})
    const {token} = useAuth()
    const {watchlater} = watchState

    useEffect(() => {
        if(token){
            (async() => {
                try {
                    const {status, data: {watchlater}} = await axios.get("/api/user/watchlater",{
                        headers:{
                            authorization: token
                        }
                    })
                    if(status === 200){
                        watchDispatch({type: "GET_WATCHLATER_VIDEO", payload: watchlater})
                    }
                }catch(err){
                    console.error(err.response)
                }
            })()
        }else{
            watchDispatch({type: "GET_WATCHLATER_VIDEO", payload: []})
        }
    },[token])

    const addWatchLater = async(video) => {
        try {
            const {status, data: {watchlater}} = await axios.post("/api/user/watchlater", {video},{
                headers: {
                    authorization:token
                }
            })
            if(status === 201) {
                watchDispatch({type: "ADD_WATCHLATER_VIDEO", payload: watchlater})
            }
        }catch(err) {
            console.error(err.response)
        }
    }

    const removeWatchLater = async(video) => {
        try {
            const {status, data: {watchlater}} = await axios.delete(`/api/user/watchlater/${video._id}`,{
                headers: {
                    authorization:token
                }
            })
            if(status === 200) {
                watchDispatch({type: "REMOVE_WATCHLATER_VIDEO", payload: watchlater})
            }
        }catch(err) {
            console.error(err.response)
        }
    }

    return (
        <WatchLaterContext.Provider value={{watchState, watchDispatch, addWatchLater, removeWatchLater}}>{children}</WatchLaterContext.Provider>
    )
}

const useWatchLater = () => useContext(WatchLaterContext)
export {useWatchLater, WatchLaterProvider}