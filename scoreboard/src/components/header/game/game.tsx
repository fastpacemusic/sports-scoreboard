import "./game.css";

const Game = () => {


    return(
        <div className="game">
           <span className="game-status">FT</span> 
            <div className="team-wrap">
                <div className="home-team">
                    <img src="" alt="logo" className="home-logo"/>
                    <span className="home-initials">MC</span>
                    <span className="home-points">2</span>
                </div>
                <div className="away-team">
                    <img src="" alt="logo" className="away-logo"/>
                    <span className="away-initials">MU</span>
                    <span className="away-points">0</span>
                </div>
            </div>
        </div>
    );
}

export default Game;