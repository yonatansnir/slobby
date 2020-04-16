import React from 'react';
import Log from "./log/Log";
import Login from "./login/Login";
import TaksNotes from "./TasksNotes/TasksNotes";
import Users from "./users/Users";

const Pages = () => {
  return ( 
    <div className="page">
      <Log />
      <Login />
      <TaksNotes />
      <Users />
    </div>
   );
}
 
export default Pages;