import "./headlineLeague.css";
import { ApiService } from "../../services/apiService";
import { useEffect, useState } from "react";

const HeadlineLeague = () => {

    const [leageName, setLeagueName] = useState('');
    const [logo, setLogo] = useState('');
    const [country, setCountry] = useState('');


    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await new ApiService().getScoreBoard();
            // console.log(response.data);
            console.log(111, response);
            setLeagueName(response.league.name);
            setCountry(response.league.country);
            setLogo(response.league.logo);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);



    

    return(
        <div className="headline-wrap">
            <img width="100px" height="100px" src={logo} className="headline-logo" alt="logo" />
            <div className="headline-league">
                <div className="league-name">{leageName}</div>
                <div className="country">{country}</div>
            </div>
        </div>
    );
}

export default HeadlineLeague;