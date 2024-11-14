import { useState, useEffect } from "react";
import "./dropdownbtn.css";
import axios from "axios";


interface Years {
    years: number[];
}


const DropdownBtn = ({years}: Years) => {

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://v3.football.api-sports.io/leagues/seasons',
    //         headers: {
    //           'x-rapidapi-host': 'v3.football.api-sports.io',
    //           'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx'
    //         }
    //       };
          
    //       axios(options)
    //         .then((response) => {
    //           console.log(response.data);
    //         })
    //         .catch((error) => {
    //           console.error('Error:', error);
    //         });
    // }, []);
    

    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentBtn, setCurrentBtn] = useState<number>();

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    }
    
    const clicked = (prev: number) => {
        setCurrentBtn(prev);
    }
    

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleDropdown}>{currentBtn}</div>
            
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>
                    <a href="#option1" className="dropdown-item" onClick={() => clicked(years[1])}>{years[1]}</a>


                </div>
            )}

        </div>
    );
}

export default DropdownBtn;