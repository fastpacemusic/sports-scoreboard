import "./scoreboard.css";
import Row from "./sb-row/row";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




const Scoreboard = () => {

    const [rowObject, setRowObject] = useState({
        position: 0,
        points: 0,
        goalDiff: 0,
        team: "",
        played: 0
    });

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

                // console.log('Scoreboard: ', response.data.response[0].league.standings[0]);
                const {rank: rank, goalsDiff: goalsDiff, points: points} = response.data.response[0].league.standings[0][0];
                const { team: { name } } = response.data.response[0].league.standings[0][0];
                const { played } = response.data.response[0].league.standings[0][0].all;


                
                

                setRowObject(prevState => ({
                    ...prevState,
                    position: rank,
                    points: points,
                    goalDiff: goalsDiff,
                    team: name,
                    played: played
                }));

                


            } catch (error) {
                console.error(error);
            }
          }

          fetchData();

    }, []);

    

    return(
        <div className="scoreboard-wrap">
            <div className="sb-positions">
                <div className="sb-pos num">#</div>
                <div className="sb-team">team</div>
                <div className="sb-played num">PL</div>
                <div className="sb-pts num">PTS</div>
                <div className="sb-gd num">GD</div>
            </div>
           {standings && standings.map((teamData: any, index: number) => {
                return(
                    <Row key={index} pos={teamData.rank} team={teamData.team.name} played={teamData.all.played} pts={teamData.points} gd={teamData.goalsDiff}/>
                );
           })}
            

        </div>
    );
}

export default Scoreboard;