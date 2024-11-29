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
    //   league number 2: Champ League, 39: Prem League, 78: Bundesliga, 3: Europa League, 61: Ligue 1, 140: laliga, 253: mls, 135: serie A
      let leagueNum = [39, 2, 78, 3, 61, 135, 253, 140];

      const handleClick = (num: number[]): number[] => {
        // await new ApiService().getScoreBoard(leagueNumID[index])
        return num.map((item) => item);
      }

    useEffect(() => {


          const fetchData = async () => {

            try {
                const leagueData = await new ApiService().getAllLeauges();

                
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
      



    return (
        <table className="top-leagues">
            <thead>
                <tr className="title-row">
                    <th className="title" >Top Leagues</th>
                </tr>
            </thead>
            <tbody>
                {leagueNames.map((item, index) => (
                    <tr key={index} className="league-row" onClick={() => {handleClick(leagueNum)}}                                                                                                                                                >
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