import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import TopLeagues from "../../components/topLeagues/topLeagues";
import "./home.css";
import { ApiService } from "../../services/apiService";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";


const Home = () => {

    const [num, setNum] = useState(39);

    const leagueID = (data: number) => {
        setNum(data);
    };

    const params = new URLSearchParams();
    params.append('league', `${num}`);
    const queryString = params.toString();
    const url = `http://localhost:3000/?${queryString}`;
    const currentUrl = window.location.href;

    

    if (currentUrl !== url) {
        window.location.assign(url);
    } else {
        console.log('URL is already the same. No need to reload.');
    }

    // console.log(url);


    return (
        <div className="home">
            <div className='league'>
                <HeadlineLeague leagueNum={num} />
                <div className="league-wrap">
                    <TopLeagues sendLeagueID={leagueID}/>
                    <Scoreboard leagueNum={num} />
                
                </div>
            </div>
                
      </div>
    );
}

export default Home;