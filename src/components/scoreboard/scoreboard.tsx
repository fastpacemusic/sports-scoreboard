import "./scoreboard.css";
import Row from "./sb-row/row";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ApiService } from "../../services/apiService";




const Scoreboard = ({leagueNum}: any) => {

    const [standings, setStandings] = useState<any>();

    const fetchData = async (leagueNum: any) => {
        try {
            const response = await new ApiService().getScoreBoard(leagueNum);
            setStandings(response.league.standings[0]);
        } catch (error) {
            console.error(error);
        }
      }


    useEffect(() => {


          fetchData(leagueNum);

    }, [leagueNum]);


    

    return(
        <table className="scoreboard-wrap panel">
            <thead className="sb-positions">
                <tr className="title-wrap">
                    <th className="empty"></th>
                    <th className="sb-pos">#</th>
                    <th className="empty"></th>
                    <th className="sb-team">Team</th>
                    <th className="sb-played">PL</th>
                    <th className="sb-gd">GD</th>
                    <th className="sb-pts">PTS</th>
                    <th className="sb-form">Form</th>
                </tr>
            </thead>
            <tbody>
                {standings && standings.map((teamData: any, index: number) => {
                        return(
                            <Row key={index} pos={teamData.rank} logo={teamData.team.logo} team={teamData.team.name} played={teamData.all.played} pts={teamData.points} gd={teamData.goalsDiff} tournament={teamData.description} form={teamData.form}/>
                        );
                })}
            </tbody>
        </table>
    );
}

export default Scoreboard;