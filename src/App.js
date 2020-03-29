import React from 'react';
import Login from './pages/login/Login';
import Header from './components/header/Header';

const App = () => {
  return(
    <div className="wrapper">
      <Header />
      <Login />
    </div>
  )
}

export default App;
