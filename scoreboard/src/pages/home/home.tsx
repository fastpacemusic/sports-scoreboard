import { useState, useEffect } from "react";
import Scoreboard from "../../components/scoreboard/scoreboard";
import TopLeagues from "../../components/topLeagues/topLeagues";
import "./home.css";
import { ApiService } from "../../services/apiService";
import HeadlineLeague from "../../components/headlineLeague/headlineLeague";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";


const Home = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [num, setNum] = useState<any>(searchParams.get('league') || 39);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newLeague = searchParams.get("league");
        setNum(newLeague);
      }, [location.search]);

    const leagueID = (data: number) => {
        const params = new URLSearchParams(location.search);

        // Update or add the 'league' query parameter
        params.set("league", data.toString());
    
        // Update the URL with the new query parameter without reloading the page
        navigate(`${location.pathname}?${params.toString()}`);

        // window.location.assign(`http://localhost:3000/?league=${data}`);
        // setNum(data);
    };

   
    // params.append('league', `${num}`);
    // const queryString = params.toString();
    // const url = `http://localhost:3000/?${queryString}`;
    // const currentUrl = window.location.href;
    

    // console.log(params.get('league'));

    // if (currentUrl !== url) {
    //     window.location.assign(url);
    // } else {
    //     console.log('URL is already the same. No need to reload.');
    // }

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