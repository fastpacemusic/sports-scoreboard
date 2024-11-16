import "./scoreboard.css";
import Row from "./sb-row/row";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




const Scoreboard = () => {

    const [standings, setStandings] = useState<any>();


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {
              league: '39',
              season: '2024'
            },
            headers: {
              'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };
          const fetchData = async () => {
            try {
                const response = await axios.request(options);

                setStandings(response.data.response[0].league.standings[0]);
                console.log("standing", response.data.response[0].league.standings[0]);




            

                


            } catch (error) {
                console.error(error);
            }
          }

          fetchData();

    }, []);

    

    return(
        <table className="scoreboard-wrap">
            <thead className="sb-positions">
                <th className="empty"></th>
                <th className="sb-pos">#</th>
                <th className="empty"></th>
                <th className="sb-team">Team</th>
                <th className="sb-played">PL</th>
                <th className="sb-gd">GD</th>
                <th className="sb-pts">PTS</th>
            </thead>
            <tbody>
                {standings && standings.map((teamData: any, index: number) => {
                        return(
                            <Row key={index} pos={teamData.rank} logo={teamData.team.logo} team={teamData.team.name} played={teamData.all.played} pts={teamData.points} gd={teamData.goalsDiff} tournament={teamData.description}/>
                        );
                })}
            </tbody>
        </table>
    );
}

export default Scoreboard;