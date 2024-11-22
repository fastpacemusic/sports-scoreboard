import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import TopLeagues from "../../components/topLeagues/topLeagues";

import "./home.css";
import { ApiService } from "../../services/apiService";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";


const Home = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [leageName, setLeagueName] = useState('');
    const [season, setSeason] = useState(0);
  
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await new ApiService().getScoreBoard();
          // console.log(response.data);
          const season = 2024;
          setLeagueName(response.league.name);
          setSeason(season);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);

    return (
        <>
            <div className='league'>
                <HeadlineLeague />
                <div className="league-wrap">
                <TopLeagues />
                <Scoreboard />
                </div>
            </div>
                
      </>
    );
}

export default Home;