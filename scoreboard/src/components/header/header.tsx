import Game from "./game/game";
import "./header.css";

const Header = () => {


    return(
        <div className="header panel">
            <a className='logo-name'>Football</a>
            <Game />
        </div>
    );
}

export default Header;