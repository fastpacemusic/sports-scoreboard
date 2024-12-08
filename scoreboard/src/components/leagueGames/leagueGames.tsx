import "./leagueGames.css";


const LeagueGames = () => {


    return(
        <div className="leagueGames panel">
            <ul className="team-wrap">
                <li className="home-team">
                    <img src="" alt="logo" className="home-logo"/>
                    <div className="team-info">
                        <span className="home-name">liverpool</span>
                    </div>
                </li>
                <span className="time">8:30</span>
                <li className="away-team">
                    <img src="" alt="logo" className="away-logo"/>
                    <div className="team-info">
                        <span className="away-name">Fulham</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default LeagueGames;