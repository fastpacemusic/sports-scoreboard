import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import "./home.css";
import InfoPanel from "../../components/InfoPanel/InfoPanel";
import { replace, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CompactList from "../../components/compactGames/compactList";

interface Home {
    leagueNum: number;
}

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [num, setNum] = useState<any>(39);


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
                <InfoPanel leagueNum={num}/>
                <CompactList />
                {/* <TopLeagues sendLeagueID={leagueID}/> */}
                <Scoreboard leagueNum={num} />
            </div>

      </div>
    );
}

export default Home;