export function videoReducer(state, action) {
    switch(action.type) {
        case "GET_VIDEOS":
            return {...state, videos: action.payload}
        case "GET_VIDEOS_BY_CATEGORY_NAME":
            return {...state, categoryName: action.payload}
        case "GET_ALL_VIDEO":
            return {...state, categoryName: "ALL"}
        default:
            return state;
    }

}