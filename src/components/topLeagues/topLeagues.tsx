import { useEffect, useState } from "react";
import "./topLeagues.css";
import axios from "axios";
import { ApiService, LeagueData } from "../../services/apiService";


interface topLeaguesData {
    sendLeagueID: (data: number) => void;
}

interface LeagueItem {
    logo: string;
    leagueName: string;
    num: number;
  }


const TopLeagues = ({sendLeagueID}: topLeaguesData) => {

    const [leagueLogos, setLeagueLogos] = useState<Record<string, string>>({
        premierleague: '',
        seriea: '',
        ligue1: '',
        championsleague: '',
        europaleague: '',
        mls: '',
        laliga: '',
        bundesliga: ''
      });

    let leagueInfo = [
        {leagueName: "Premier League", num: 39, logo: leagueLogos.premierleague},
        {leagueName: "Champions League", num: 2, logo: leagueLogos.championsleague},
        {leagueName: "Bundesliga", num: 78, logo: leagueLogos.bundesliga},
        {leagueName: "Europa League", num: 3, logo: leagueLogos.europaleague},
        {leagueName: "Ligue 1", num: 61, logo: leagueLogos.ligue1},
        {leagueName: "Serie A", num: 135, logo: leagueLogos.seriea},
        {leagueName: "MLS", num: 253, logo: leagueLogos.mls},
        {leagueName: "LaLiga", num: 140, logo: leagueLogos.laliga},
    ];
    
    useEffect(() => {


          const fetchData = async () => {

            try {
                const leagueData = await new ApiService().getAllLeagues();
                
                
                const getLeagueByName = (countryName: string, leagueName: string) => {
                    const filteredLeagues = leagueData.filter((idxData: LeagueData) => {
                        return idxData.country.name === countryName && idxData.name.toLowerCase() == leagueName.toLowerCase();
                    });

                    return filteredLeagues.length > 0 ? filteredLeagues[0].logo : '';

                }

                setLeagueLogos((prevState: Record<string, string>) => ({
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
        
        <table className="top-leagues panel">
            <thead>
                <tr className="title-row">
                    <th className="title" >Top Leagues</th>
                </tr>
            </thead>
            <tbody>
                {leagueInfo.map((item: LeagueItem, index: number) => (
                    <tr key={index} className="league-row" onClick={() => {sendLeagueID(item.num)}}                                                                                                                                                >
                        <td className="logo-wrap">
                            <img src={item.logo}  className="logo" alt="logo"></img>
                        </td>
                        <td className="league-name">{item.leagueName}</td>
                    </tr>
                ))}

                

            </tbody>
            
        </table>
        
    );
}

export default TopLeagues;