import { useEffect, useState } from "react";
import "./topLeagues.css";
import axios from "axios";
import { ApiService } from "../../services/apiService";

interface topLeaguesData {
    sendLeagueID: (data: number) => void;
}


const TopLeagues = ({sendLeagueID}: topLeaguesData) => {

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

    //   let leagueNames = ['Premier League','Champions League', 'Bundesliga', 'Europa League', 'Ligue 1', 'Serie A' ,  'MLS', 'LaLiga'];
    //   league number 2: Champ League, 39: Prem League, 78: Bundesliga, 3: Europa League, 61: Ligue 1, 140: laliga, 253: mls, 135: serie A

    let leagueInfo = [
        {leagueName: "Premier League", num: 39, logo: ''},
        {leagueName: "Champions League", num: 2, logo: ''},
        {leagueName: "Bundesliga", num: 78, logo: ''},
        {leagueName: "Europa League", num: 3, logo: ''},
        {leagueName: "Ligue 1", num: 61, logo: ''},
        {leagueName: "Serie A", num: 135, logo: ''},
        {leagueName: "MLS", num: 253, logo: ''},
        {leagueName: "LaLiga", num: 140, logo: ''},
    ];
    

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
                {leagueInfo.map((item: any, index: number) => (
                    <tr key={index} className="league-row" onClick={() => {sendLeagueID(item.num)}}                                                                                                                                                >
                        <td className="logo-wrap">
                            <img src={leagueLogos[item.leagueName.toLowerCase().replace(/\s+/g, '')]}  className="logo" alt="logo"></img>
                        </td>
                        <td className="league-name">{item.leagueName}</td>
                    </tr>
                ))}

                

            </tbody>
            
        </table>
    );
}

export default TopLeagues;