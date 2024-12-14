import "./leagueGames.css";

interface LeagueData {
    Today: string,
    Tomorrow: string,
    Yesterday: string
}


const LeagueGames = () => {


    return(
        <div className="leagueGames panel">
            <div className="date-of-game">Today</div>
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