import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h1 className="App-subtitle">Match Cards to Win</h1>
        </header>
        <div className="FirstRow">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className="SecondRow">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className="ThirdRow">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className="FourthRow">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
}

export default App;
