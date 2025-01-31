import './App.css';
import Fixtures from './pages/Fixtures/Fixtures';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';
import TeamInfo from './pages/teamInfo/teamInfo';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/fixtures' element = {<Fixtures />} />
          <Route path='/team-info' element = {<TeamInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
