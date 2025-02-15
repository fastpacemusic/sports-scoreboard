import { useEffect, useState } from "react";
import { ApiService } from "../../services/apiService";
import "./dropdown.css";

interface Dropdown {
    className: string,

}

const Dropdown = ({className}: Dropdown) => {

    const [years, setYears] = useState<number[]>();
    

    useEffect(() => {
        const tempYears = [];
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();



        // const response = await new ApiService().getScoreBoard();

        for (let i = currentYear - 1; i >= 2010; i--) {
            tempYears.push(i);
        } 
        
        if (currentMonth >= 5) {
            tempYears.unshift(currentYear);
        }
  

        setYears(tempYears);

    }, []);

    return (
    <select className={className}>
        {years?.map((year) => (
            <option key={year}>{year}/{year + 1}</option>
        ))}
    </select>
    );
}

export default Dropdown;