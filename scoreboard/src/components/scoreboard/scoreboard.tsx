import "./scoreboard.css";
import Row from "./sb-row/row";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



const Scoreboard = () => {

    const [position, setPosition] = useState();
    const [points, setPoints] = useState();
    const [goalDiff, setGoalDiff] = useState();
    const [team, setTeam] = useState();



    return(
        <div className="scoreboard-wrap">
            <div className="sb-positions">
                <div className="sb-pos num">#</div>
                <div className="sb-team">team</div>
                <div className="sb-played num">PL</div>
                <div className="sb-pts num">PTS</div>
                <div className="sb-gd num">GD</div>
            </div>
            {/* <Row pos={position} team={team} played={0} pts={points} gd={goalDiff}/> */}
        </div>
    );
}

export default Scoreboard;