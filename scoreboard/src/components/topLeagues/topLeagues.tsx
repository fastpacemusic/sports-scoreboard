import { useEffect, useState } from "react";
import "./topLeagues.css";
import axios from "axios";
import { get } from "http";


const TopLeagues = () => {

    const [leagueLogos, setLeagueLogos] = useState<any>({
        premierLeague: '',
        serieA: '',
        ligue1: '',
        championsLeague: '',
        europaLeague: '',
        mls: '',
        laliga: '',
        bundesliga: ''
      });

      let leagueNames = ['Premier League','Champions League', 'Bundesliga', 'Europa League', 'Ligue 1', 'Serie A' ,  'MLS', 'LaLiga'];
      

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {season: '2024'},
            headers: {
              'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };

          const fetchData = async () => {

            try {
                const response = await axios.request(options);
                const leagueData = response.data.response;
                console.log(leagueData);
                
                const getLeagueByName = (countryName: string, leagueName: string) => {
                    const filteredLeagues = leagueData.filter((idxData: any) => {
                        return idxData.country.name === countryName && idxData.league.name.toLowerCase() == leagueName.toLowerCase();
                    });

                    
                    // if (filteredLeagues) {

                    //     console.log(filteredLeagues[0].league.logo);
                    // }

                    return filteredLeagues.length > 0 ? filteredLeagues[0].league.logo : '';

                }

                setLeagueLogos((prevState: any) => ({
                    ...prevState,
                    premierLeague: getLeagueByName('England', 'Premier League'),
                    bundesliga: getLeagueByName('Germany', 'Bundesliga'),
                    ligue1: getLeagueByName('France', 'Ligue 1'),
                    mls: getLeagueByName('USA', 'Major League Soccer'),
                    serieA: getLeagueByName('Italy', 'Serie A'),
                    laliga: getLeagueByName('Spain', 'la liga'),
                    championsLeague: getLeagueByName('World', 'UEFA Champions League'),
                    europaLeague: getLeagueByName('World', 'UEFA Europa League')
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
                <tr>
                    <td className="title">Top Leagues</td>
                </tr>
            </thead>
            <tbody>
                {leagueNames.map((item, index) => (
                    <tr key={index} className="league-row">
                        <td>
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