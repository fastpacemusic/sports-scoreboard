import { useState } from "react";
import "./dropdownbtn.css";


interface Years {
    years: number[];
}


const DropdownBtn = ({years}: Years) => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    }
    console.log(toggleDropdown);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleDropdown}>{years}</div>
            
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#option1" className="dropdown-item">{years}</a>
                    <a href="#option2" className="dropdown-item">{years}</a>
                    <a href="#option3" className="dropdown-item">{years}</a>
                    <a href="#option3" className="dropdown-item">{years}</a>
                    <a href="#option3" className="dropdown-item">{years}</a>
                    <a href="#option3" className="dropdown-item">{years}</a>

                </div>
            )}

        </div>
    );
}

export default DropdownBtn;