import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import TopLeagues from "../../components/topLeagues/topLeagues";
import "./home.css";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";
import { replace, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LeagueGames from "../../components/leagueGames/leagueGames";
import ArrowButton from "../../components/arrowButton/arrowButton";
import { ApiService } from "../../services/apiService";

interface Home {
    leagueNum: number;
}

const Home = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [num, setNum] = useState<any>(39);

    

    const fetchDataAndUpdateUrl = async ({leagueNum}: Home) => {
        const response = await new ApiService().getScoreBoard(leagueNum);
        setNum(response.league.id);


    }

    useEffect(() => {

        const searchParams = new URLSearchParams(location.search);
        const newLeague = searchParams.get("league");
        
        setNum(() => {
            return newLeague;
        });
    
        // Update or add the 'league' query parameter
        searchParams.set("league", num);
    
        // Update the URL with the new query parameter without reloading the page
        navigate(`${location.pathname}?${searchParams}`, {replace: true});
    
      }, [location.search, navigate, num]);



    return (
        <div className="home">
            <div className='league'>
                <HeadlineLeague leagueNum={num} />
                <div className="matches-wrap panel">
                    <div className="all-matches-btn">Matches</div>
                    <div className="league-matches-scroll">
                        <div className="matches">
                            <LeagueGames />
                            <LeagueGames />
                            <LeagueGames />                     
                        </div>
                    </div>
                    <ArrowButton direction="left" onClick={() => {console.log("left button")}} className="left-arrow" />
                    <ArrowButton direction="right" onClick={() => {console.log("right button")}} className="right-arrow" />
                </div>
                <div className="league-wrap">
                    {/* <TopLeagues sendLeagueID={leagueID}/> */}
                    <Scoreboard leagueNum={num} />
                </div>
            </div>
                
      </div>
    );
}

export default Home;