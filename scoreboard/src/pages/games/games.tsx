import { useEffect } from "react";
import "./games.css";
import axios from "axios";

const Games = () => {

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {
              league: '39',
              season: '2024',
              next: '50'
            },
            headers: {
              'x-rapidapi-key': '39078bce62msh6328de9fc911fbbp1f2c47jsn26c13a67abc9',
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            }
          };

          const fetchData = async () => {
                try {
                    const response = await axios.request(options);
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
          }
          

      
    });
    

    return (
        <table className="upcoming-fixtures">
            <thead>
                <tr>
                    <th className="date">Saturday, November 23, 2024</th>
                </tr>
            </thead>
            <tbody>
                <tr className="fixture">
                    <td>

                        <span className="home-team">Leicester City</span>
                        <img src="#logo" className="logo" alt="logo" />
                    </td>
                    <td className="time">4:00</td>
                    <td>
                        <img src="#logo" className="logo" alt="logo" />
                        <span className="away-team">Chelsea</span>
                    </td>
                </tr>
                <tr className="stadium"></tr>
            </tbody>
        </table>
    );
}

export default Games;