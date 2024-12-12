import HeadlineLeague from "../../components/headlineLeague/headlineLeague";
import {useLocation } from "react-router-dom";
import "./teamInfo.css";
import Scoreboard from "../../components/scoreboard/scoreboard";
import Form from "../../components/scoreboard/form/form";

const TeamInfo = () =>  {

    const location = useLocation();
    const { pos, logo, team, played, pts, gd, tournament, form } = location.state || {};

    console.log(team);

    return (
        <div className="teamInfo-wrap">
            <HeadlineLeague team={team} headlineLogo={logo} />
            <div className="team-form panel">
                <span className="team-form-txt">Team Form</span>
                <Form form={form}/>
            </div>
            <Scoreboard leagueNum="39" />

        </div>
    );
}

export default TeamInfo;