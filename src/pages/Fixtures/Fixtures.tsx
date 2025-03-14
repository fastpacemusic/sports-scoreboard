import { useEffect, useState } from "react";
import "./Fixtures.css";
import axios, { all } from "axios";
import {format} from "date-fns";
import InfoPanel from "../../components/InfoPanel/InfoPanel";

const Fixtures = () => {

    const utcDate = new Date("2024-11-26T12:00:00+00:00");
    const [correctDate, setCorrectDate] = useState(format(utcDate, "EEEE, MMMM dd, yyyy"));
    const [fixtureTime, setFixtureTime] = useState(format(utcDate, "H:mm"));

    // console.log(correctDate);


    const [teams, setTeams] = useState<any>([]);


    // useEffect(() => {

        
    //     const options = {
    //         method: 'GET',
    //         url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    //         params: {
    //           league: '39',
    //           season: '2024',
    //           next: '50'
    //         },
    //         headers: {
    //           'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
    //           'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    //         }
    //       };

    //       const fetchData = async () => {
    //             try {
    //                 const utcDateString = format(utcDate, "MM/dd/yyyy");
    //                 const response = await axios.request(options);
    //                 const fixtureData = response.data.response;
    //                 // console.log(fixtureData);

    //                 let teamData = fixtureData.filter((item: any) => {
    //                     return format(new Date(item.fixture.date), "MM/dd/yyyy") === utcDateString;
    //                 });
    //                 setTeams(teamData);
    //                 console.log(teams);


                    

    //                 // format(new Date(data.fixture.date), "MM/dd/yyyy") === utcDateString

    //             } catch (error) {
    //                 console.error(error);
    //             }
    //       }
          
    //       fetchData();
      
    // }, []);

    // useEffect(() => {
    //     console.log(teams);
    // }, [teams]);


    return (
        <div className="fixture-wrap">
            <InfoPanel />
            <table className="fixtures">
                <thead className="head-container">
                    <tr className="fix-head">
                        <th className="logo"><img src="" alt="logo"></img></th>
                        <th className="title">ucl champ league</th>
                    </tr>
                </thead>
                <tbody className="body-container">
                    <tr className="game">
                        <tr className="team1">
                            <td id="gname1">chelsea</td>
                            <td className="tlogo" id="tlogo1"><img src="" alt="logo"></img></td>
                        </tr>
                        <td className="score">2-3</td>
                        <tr className="team2">
                            <td className="tlogo" id="tlogo2"><img src="" alt="logo"></img></td>
                            <td id="gname2">fullham</td>
                        </tr>
                        <td className="amt-time">ft</td>
                        <div className="game-following">★</div>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Fixtures;