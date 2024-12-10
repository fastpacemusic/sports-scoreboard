import "./game.css";

const Game = () => {


    return(
        <div className="game">
           <span className="game-status">FT</span> 
            <ul className="team-wrap">
                <li className="home-team">
                    <img src="" alt="logo" className="home-logo"/>
                    <div className="team-info">
                        <span className="home-initials">MC</span>
                        <span className="home-points">2</span>
                    </div>
                </li>
                <li className="away-team">
                    <img src="" alt="logo" className="away-logo"/>
                    <div className="team-info">
                        <span className="away-initials">MU</span>
                        <span className="away-points">0</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Game;