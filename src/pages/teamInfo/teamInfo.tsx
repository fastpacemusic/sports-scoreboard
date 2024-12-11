import HeadlineLeague from "../../components/headlineLeague/headlineLeague";
import { useLocation } from "react-router-dom";
import "./teamInfo.css";
import Scoreboard from "../../components/scoreboard/scoreboard";

const TeamInfo = () =>  {

    const location = useLocation();
    const { pos, logo, team, played, pts, gd, tournament, form } = location.state || {};


    return (
        <div className="teamInfo-wrap">
            <HeadlineLeague leagueNum="39" />
            <Scoreboard leagueNum="39" />

        </div>
    );
}

export default TeamInfo;