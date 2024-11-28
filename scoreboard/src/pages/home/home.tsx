import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import TopLeagues from "../../components/topLeagues/topLeagues";

import "./home.css";
import { ApiService } from "../../services/apiService";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";


const Home = () => {

    return (
        <>
            <div className='league'>
                <HeadlineLeague leagueNum={39} />
                <div className="league-wrap">
                    <TopLeagues />
                    <Scoreboard leagueNum={39} />
                
                </div>
            </div>
                
      </>
    );
}

export default Home;