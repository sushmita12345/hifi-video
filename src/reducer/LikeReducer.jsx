export function LikeReducer(state, action) {
    switch(action.type){
        case "ALL_LIKED_VIDEO":
            return {...state, likedVideo: action.payload}
        case "SAVE_LIKED_VIDEO":
            return {...state, likedVideo: action.payload}
        case "REMOVE_LIKED_VIDEO":
            return {...state, likedVideo: action.payload}
        default:
            return state
    }
}