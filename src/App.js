import React from 'react';
import './App.css';

import GitHubCalendar from 'react-github-calendar'

import A4 from './A4'
import Timeline from './Timeline/Timeline'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <A4 className="PageOne">
        <Header />
        <Timeline />
      </A4>
      <A4 className="PageTwo">
        Experiences
        <br/>
        Motivation
        <br/>
        <GitHubCalendar username="whomenope" />
      </A4>
    </div>
  );
}

export default App;
