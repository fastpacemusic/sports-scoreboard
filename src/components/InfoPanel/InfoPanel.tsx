import "./InfoPanel.css";
import { ApiService } from "../../services/apiService";
import { useEffect, useState } from "react";
import Loading from "../loading/loading";

interface InfoPanel {
  leagueNum?: number,
  team?: string,
  headlineLogo?: string,
}

const InfoPanel = ({leagueNum, team, headlineLogo}: InfoPanel) => {

    const [name, setName] = useState<string>('');
    const [logo, setLogo] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const fetchData = async (leagueNum: any) => {
      try {
        const response = await new ApiService().getScoreBoard(leagueNum);
        if (leagueNum) {
            setName(response.league.name);
            setCountry(response.league.country);
            setLogo(response.league.logo);
        } 
        // else {
        //   setName(team ?? "unavailable");
        //   setLogo(headlineLogo ?? "unavailable");
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
            <nav className="headline-container">
              <a id="overview" className="item">Overview</a>
              <a id="table" className="item">Table</a>
              <a id="news" className="item">News</a>
            </nav>
            <select className="season-years">
                <option>2024/2025</option>
                <option>2023/2024</option>
            </select>
        </div>
    );
}

export default InfoPanel;