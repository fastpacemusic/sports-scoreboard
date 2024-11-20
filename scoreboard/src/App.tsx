import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Scoreboard from './components/scoreboard/scoreboard';
import './App.css';
import DropdownBtn from './components/dropdownbtn/dropdownbtn';
import TopLeagues from './components/topLeagues/topLeagues';
import { ApiService } from './services/apiService';
import Games from './pages/games/games';

function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leageName, setLeagueName] = useState('');
  const [season, setSeason] = useState(0);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await new ApiService().getScoreBoard();
        // console.log(response.data);
        const season = 2024;
        setLeagueName(response.league.name);
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

      {/* <div className='league'>
        <div className='league-details'>
          <div className='logo'></div>
          <div className='name'>{leageName}</div>
          <div className='season'>{season}</div>
        </div>
        <Scoreboard />
      </div>
      <TopLeagues /> */}
      <div className='upcoming-games'>
        <Games />

      </div>
    </div>
  );
}


export default App;
