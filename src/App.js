import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';

class App extends Component {
  render() {
      return (
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Main Page</h1>
              <h1 className="App-subtitle">This is the Main Page</h1>
            </header>
          </div>
          <div className="navbar">
            <Route path="/memory" component={MemoryGame} />
            <Route path="/jobs" component={Jobs} />
            <Link to="/memory">Memory Game</Link>
            <Link to="/jobs">Jobs</Link>
          </div>
        </div>
    )
  }
}

export default App;
