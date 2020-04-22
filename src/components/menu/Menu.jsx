import React from 'react';
import { Link } from "react-router-dom";

const Menu = ({ openMenu, setOpenMenu }) => {
    const items = [
        { name: 'dashboard', url:'/', label: 'Dashboard' },
        { name: 'tasknotes', url:'/tasknotes', label: 'Tasks Notes' },
        { name: 'users', url: '/users', label: 'Users' },
      ]
    return(
        <div className={openMenu ? "sidenav open" : "sidenav close"} >
            {items.map(item => <div className="menu-item">{item.label}</div>)}
        </div>
    )
}

export default Menu;