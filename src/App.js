import React from 'react';

import Header from './components/header/Header';

import Cards from './components/cards/Cards';
import Lobby from './components/lobby/Lobby';
import Notes from './components/notes/Notes';
import FastSearch from './components/fast-search/FastSearch';
import EventsLog from './components/log/EventsLog';
import GuestsLog from './components/log/GuestsLog';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header />
      <div className="row">
        <Cards />
        <Lobby />
      </div>
      <div className="row">
        <div className="p65">
            <EventsLog />
            <GuestsLog />
        </div>
        <div className="p35">
            <FastSearch />
            <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;
