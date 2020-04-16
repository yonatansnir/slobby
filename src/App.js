import React from 'react';

import { useSelector } from 'react-redux';

import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import TasksNotes from './pages/TasksNotes/TasksNotes';
import Users from './pages/users/Users';
import Log from './pages/log/Log';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  const user = useSelector(state => state.user);

  return(
    <div className="wrapper">
      <Header />
      {user ? <Login /> : ""
        
        // <Dashboard />
      
      }
      {/* <Log /> */}
      {/* <Users /> */}
      <TasksNotes />
    </div>
  )
}

export default App;
