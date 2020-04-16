import React from 'react';
import { Link } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Menu = ({ openMenu }) => {
    
    const items = [
        { name: 'dashboard', url:'/', label: 'Dashboard' },
        { name: 'tasknotes', url:'/tasknotes', label: 'Tasks Notes' },
        { name: 'users', url: '/users', label: 'Users' },
      ]
    return(
        <div className={openMenu ? "sidenav open" : "sidenav close"}>
            <List className="menu-list" disablePadding dense>
                {items.map(({ label, name, url, ...rest }) => (
                <ListItem className="menu-item" key={name} button {...rest}>
                    <ListItemText><Link to = {`${url}`}>{label}</Link></ListItemText> 
                </ListItem>
                ))}
            </List>   
        </div>
    )
}

export default Menu;