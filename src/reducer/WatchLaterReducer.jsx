export function WatchLaterReducer(state, action) {
    switch(action.type){
        case "GET_WATCHLATER_VIDEO":
            return {...state, watchlater: action.payload}
        case "ADD_WATCHLATER_VIDEO":
            return {...state, watchlater: action.payload}
        case "REMOVE_WATCHLATER_VIDEO":
            return {...state, watchlater: action.payload}
        default:
            return state
    }
}