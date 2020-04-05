import React from 'react';

import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import TasksNotes from './pages/TasksNotes/TasksNotes';

const App = () => {
  return(
    <div className="wrapper">
      <Menu />
      <Header />
      {/* <Login /> */}
      <TasksNotes />
    </div>
  )
}

export default App;
