import React, { Fragment } from 'react';
import Dashboard from './pages/Dashboard';
import Menu from './components/menu/Menu';

const App = () => {
  return(
    <div className="wrapper">
      <div>
        <Menu />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  )
}

export default App;
