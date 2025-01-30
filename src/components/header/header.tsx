import "./header.css";
import SearchIcon from "../../icons/search-icon.svg";

const Header = () => {


    return(
        <div className="header panel">
            <div className="logo-input-wrap">
                <a className='logo-name'>Football</a>
                <div className="search-container">
                    <input type="text" className="search" placeholder="Search..."></input>
                    <img src={SearchIcon} alt="search icn" className="search-icon"/>
                </div>
            </div>

        </div>
    );
}

export default Header;