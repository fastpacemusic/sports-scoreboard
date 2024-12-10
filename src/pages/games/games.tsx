import { useEffect, useState } from "react";
import "./games.css";
import axios, { all } from "axios";
import {format} from "date-fns";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";

const Games = () => {

    const utcDate = new Date("2024-11-26T12:00:00+00:00");
    const [correctDate, setCorrectDate] = useState(format(utcDate, "EEEE, MMMM dd, yyyy"));
    const [fixtureTime, setFixtureTime] = useState(format(utcDate, "H:mm"));

    // console.log(correctDate);


    const [teams, setTeams] = useState<any>([]);


    useEffect(() => {

        
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {
              league: '39',
              season: '2024',
              next: '50'
            },
            headers: {
              'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };

          const fetchData = async () => {
                try {
                    const utcDateString = format(utcDate, "MM/dd/yyyy");
                    const response = await axios.request(options);
                    const fixtureData = response.data.response;
                    // console.log(fixtureData);

                    let teamData = fixtureData.filter((item: any) => {
                        return format(new Date(item.fixture.date), "MM/dd/yyyy") === utcDateString;
                    });
                    setTeams(teamData);
                    console.log(teams);


                    

                    // format(new Date(data.fixture.date), "MM/dd/yyyy") === utcDateString

                } catch (error) {
                    console.error(error);
                }
          }
          
          fetchData();
      
    }, []);

    // useEffect(() => {
    //     console.log(teams);
    // }, [teams]);


    return (
        <div className="fixture-wrap">
            <HeadlineLeague />
            <table className="upcoming-fixtures">
                <thead>
                    <tr className="date-wrap">
                        <th className="date">{correctDate}</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        <tr  className="fixture">
                        <td className="team-row">
                            <div className="home-team-wrap">
                                <span className="home-team">Leicester City</span>
                                <img src="#logo" className="logo" alt="logo" />
                            </div>
                            <div className="stadium">Stadium: West Brom</div>

                        </td>
                        <td className="time">{fixtureTime}</td>
                        <td className="away-team-wrap">
                            <img src="#logo" className="logo" alt="logo" />
                            <span className="away-team">Chelsea</span>
                        </td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default Games;