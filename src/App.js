import React from 'react';

import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import Notes from './components/notes/Notes';

const App = () => {
  return(
    <div className="wrapper">
      <Menu />
      <Header />
      {/* <Login /> */}
      {/* <Tasks /> */}
      <Notes />
    </div>
  )
}

export default App;
