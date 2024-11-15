import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Scoreboard from './components/scoreboard/scoreboard';
import './App.css';
import DropdownBtn from './components/dropdownbtn/dropdownbtn';

function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leageName, setLeagueName] = useState(null);
  const [season, setSeason] = useState(0);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {
        league: '39',
        season: '2024'
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
        const {league: {name: leageName} } = response.data.response[0];
        const {season} = response.data.parameters;
        setLeagueName(leageName);
        setSeason(season);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);









  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className='league'>
        <div className='league-details'>
          <div className='logo'></div>
          <div className='name'>{leageName}</div>
          <div className='season'>{season}</div>
          <DropdownBtn years={[2020]} />
        </div>
        <Scoreboard />
      </div>

    </div>
  );
}

export default App;
