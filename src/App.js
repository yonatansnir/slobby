import React from 'react';

import { useSelector } from 'react-redux';
import { Switch, Route} from 'react-router-dom';

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
      {user ? <Login /> :
        <div className="main">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route path="/tasknotes" component={TasksNotes} />
          </Switch>
        </div>
      }
      {/* <Log /> */}
      {/* <Users /> */}
      {/* <TasksNotes /> */}

    </div>
  )
}

export default App;
