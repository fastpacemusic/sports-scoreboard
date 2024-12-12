import "./headlineLeague.css";
import { ApiService } from "../../services/apiService";
import { useEffect, useState } from "react";

interface HeadlineData {
  leagueNum?: number,
  team?: string,
  headlineLogo?: string,
  headlineCountry?: string
}

const HeadlineLeague = ({leagueNum, team, headlineLogo}: HeadlineData) => {

    const [name, setName] = useState<string>('');
    const [logo, setLogo] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const fetchData = async (leagueNum: any) => {
      try {
        const response = await new ApiService().getScoreBoard(leagueNum);
        setName(response.league.name);
        setCountry(response.league.country);
        setLogo(response.league.logo);
        
        // else {
        //   setName(team ?? "undefined team");
        //   setLogo(headlineLogo ?? "no logo");
        //   setCountry(response.league.country);
        // }

      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {    
        fetchData(leagueNum);
      }, [leagueNum]);



    

    return(
        <div className="headline-wrap panel">
            <img src={logo} className="headline-logo" alt="logo" />
            <div className="headline-league">
                <div className="league-name">{name}</div>
                <div className="country">{country}</div>
            </div>
        </div>
    );
}

export default HeadlineLeague;