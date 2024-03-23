import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import Favorites from './Components/Favorites';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import Footer from './Components/footer';
function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route exact path="/" component={Main} />
        <Route exact path="/favorites" component={Favorites} />
      </Routes>
        {/* Add more routes for other pages if needed */}
    </div>
  );
}

export default App;
