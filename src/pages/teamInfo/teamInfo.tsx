import InfoPanel from "../../components/InfoPanel/InfoPanel";
import {useLocation } from "react-router-dom";
import "./teamInfo.css";
import Scoreboard from "../../components/scoreboard/scoreboard";
import Form from "../../components/scoreboard/form/form";

const TeamInfo = () =>  {

    const location = useLocation();
    const { pos, logo, team, played, pts, gd, tournament, form, leagueNumber } = location.state || {};

    console.log(leagueNumber);

    return (
        <div className="teamInfo-wrap">
            <InfoPanel team={team} headlineLogo={logo} />
            <div className="team-form panel">
                <span className="team-form-txt">Team Form</span>
                <Form form={form}/>
            </div>
            <Scoreboard leagueNum={leagueNumber} />

        </div>
    );
}

export default TeamInfo;