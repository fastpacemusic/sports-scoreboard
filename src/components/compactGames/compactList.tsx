import ArrowButton from "../arrowButton/arrowButton";
import LeagueGames from "../leagueGames/leagueGames";
import "./compactList.css";

const CompactList = () => {

    return (
    <div className="matches-wrap panel">
        <div className="all-matches-btn">Matches</div>
            <div className="league-matches-scroll">
                <div className="matches">
                    <LeagueGames />
                    <LeagueGames />
                    <LeagueGames />                     
                </div>
            </div>
        <ArrowButton direction="left" onClick={() => {console.log("left button")}} className="left-arrow" />
        <ArrowButton direction="right" onClick={() => {console.log("right button")}} className="right-arrow" />
    </div>
    );
}

export default CompactList;