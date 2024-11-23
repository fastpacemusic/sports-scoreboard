import { useEffect, useState } from "react";
import "./topLeagues.css";
import axios from "axios";
import { ApiService } from "../../services/apiService";


const TopLeagues = () => {

    const [leagueLogos, setLeagueLogos] = useState<any>({
        premierleague: '',
        seriea: '',
        ligue1: '',
        championsleague: '',
        europaleague: '',
        mls: '',
        laliga: '',
        bundesliga: ''
      });

      let leagueNames = ['Premier League','Champions League', 'Bundesliga', 'Europa League', 'Ligue 1', 'Serie A' ,  'MLS', 'LaLiga'];
      

    useEffect(() => {


          const fetchData = async () => {

            try {
                const leagueData = await new ApiService().getAllLeauges();
                const scoreboardData = await new ApiService().getScoreBoard();
                console.log("topleagues", leagueData);
                
                const getLeagueByName = (countryName: string, leagueName: string) => {
                    const filteredLeagues = leagueData.filter((idxData: any) => {
                        return idxData.country.name === countryName && idxData.league.name.toLowerCase() == leagueName.toLowerCase();
                    });

                    return filteredLeagues.length > 0 ? filteredLeagues[0].logo : '';

                }

                setLeagueLogos((prevState: any) => ({
                    ...prevState,
                    premierleague: getLeagueByName('England', 'Premier League'),
                    bundesliga: getLeagueByName('Germany', 'Bundesliga'),
                    ligue1: getLeagueByName('France', 'Ligue 1'),
                    mls: getLeagueByName('USA', 'Major League Soccer'),
                    seriea: getLeagueByName('Italy', 'Serie A'),
                    laliga: getLeagueByName('Spain', 'la liga'),
                    championsleague: getLeagueByName('World', 'UEFA Champions League'),
                    europaleague: getLeagueByName('World', 'UEFA Europa League')
                  }));
                  
                  

            } catch (error) {
                console.error(error);
            }

          }
          
          fetchData();

    }, []);

    // Object.entries(leagueLogos).map(([key, value]) => {
    //     console.log(`League: ${key}, Logo: ${value}`);
    //   });
      



    return (
        <table className="top-leagues">
            <thead>
                <tr className="title-row">
                    <th className="title" >Top Leagues</th>
                </tr>
            </thead>
            <tbody>
                {leagueNames.map((item, index) => (
                    <tr key={index} className="league-row">
                        <td className="logo-wrap">
                            <img src={leagueLogos[item.toLowerCase().replace(/\s+/g, '')]}  className="logo" alt="logo"></img>
                        </td>
                        <td className="league-name">{item}</td>
                    </tr>
                ))}

                

            </tbody>
            
        </table>
    );
}

export default TopLeagues;