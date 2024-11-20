import './App.css';
import Games from './pages/games/games';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/fixtures' element = {<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
