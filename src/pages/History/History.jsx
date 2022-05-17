import {Sidebar, HistoryCard} from "../../components/index";

// import { Sidebar } from "../../components/Sidebar/Sidebar";
// import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import { useHistory } from "../../context/HistoryContext";
import {IcRoundDelete} from "../../assets/Icon/Icon";

import "./History.css"

export function History() {

    const {historyState: {historyVideo}, removeAllHistory} = useHistory()
    return (
        <div className="video-category-filter-container">
            <Sidebar />
            <div className="video-chips-container">
                <div className="video-history-length-container">
                    <span className="video-history-length">History({historyVideo?.length})</span>
                    <div className="video-history-clear-container" onClick={() => removeAllHistory()}>
                        <span className="video-history-clear-content">Clear</span>
                        <IcRoundDelete className="video-history-clear-icon"/>
                    </div>
                    
                </div>
                <div className="videoCard-main-history-wrapper">
                    
                    {historyVideo?.map((eachVideo) => <HistoryCard eachVideo={eachVideo} key={eachVideo.id}/>)}
                    
                </div>
            </div>
        </div>
    )
}