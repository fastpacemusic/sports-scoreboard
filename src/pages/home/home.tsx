import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import TopLeagues from "../../components/topLeagues/topLeagues";
import "./home.css";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LeagueGames from "../../components/leagueGames/leagueGames";
import ArrowButton from "../../components/arrowButton/arrowButton";

const Home = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [num, setNum] = useState<number>(Number(searchParams.get('league') || 39));

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newLeague = searchParams.get("league");
        setNum(Number(newLeague));
      }, [location.search]);

    const leagueID = (data: number) => {
        const params = new URLSearchParams(location.search);

        // Update or add the 'league' query parameter
        params.set("league", data.toString());
    
        // Update the URL with the new query parameter without reloading the page
        navigate(`${location.pathname}?${params.toString()}`);
    };

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
                    <TopLeagues sendLeagueID={leagueID}/>
                    <Scoreboard leagueNum={num} />
                </div>
            </div>
                
      </div>
    );
}

export default Home;