import React from 'react';

import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Header from './components/header/Header';

const App = () => {
  return(
    <div className="wrapper">
      <Menu />
      <Header />
      <Login />
    </div>
  )
}

export default App;
