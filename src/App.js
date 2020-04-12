import React from 'react';

import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import TasksNotes from './pages/TasksNotes/TasksNotes';
import Users from './pages/users/Users';
import Log from './pages/log/Log';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return(
    <div className="wrapper">
      <Menu />
      <Header />
      <Dashboard />
      {/* <Log /> */}
      {/* <Users /> */}
      {/* <Login /> */}
      {/* <TasksNotes /> */}
    </div>
  )
}

export default App;
