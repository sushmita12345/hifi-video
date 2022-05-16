export const HistoryReducer = (state, action) => {
    switch(action.type){
        case "SAVED_VIDEO_HISTORY":
            return {...state, historyVideo: action.payload}
        case "CLEAR_VIDEO_HISTORY":
            return {...state, historyVideo: action.payload}
        case "REMOVE_SINGLE_VIDEO_HISTORY":
            return {...state, historyVideo: action.payload}
        default:
            return state
    }
}