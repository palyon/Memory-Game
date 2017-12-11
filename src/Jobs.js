import React, { Component } from 'react';
import './Jobs.css';
import JobsListItem from "./JobsListItem.js"

class Jobs extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Jobs in Atlanta</h1>
            <p className="App-subtitle">Click to Explore Jobs</p>
          </header>
        </div>
        <div className="Jobs">
          <JobsListItem />
          <JobsListItem />
          <JobsListItem />
        </div>
      </div>
    )
  }
}

export default Jobs;
