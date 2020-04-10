import React from 'react';

import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import TasksNotes from './pages/TasksNotes/TasksNotes';
import Users from './pages/users/Users';

const App = () => {
  return(
    <div className="wrapper">
      <Header />
      <Users />
      {/* <Login /> */}
      {/* <TasksNotes /> */}
    </div>
  )
}

export default App;
