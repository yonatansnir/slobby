import React from 'react';

import Header from './components/header/Header';

import Cards from './components/cards/Cards';
import Lobby from './components/lobby/Lobby';

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
        <div className="box p65">
            <h2>יומן</h2>
        </div>
        <div className="box p35">
            <h2>דיירים</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
