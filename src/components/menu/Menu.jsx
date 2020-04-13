import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Menu = ({ items, openMenu }) => {
    return(
        <div className={openMenu ? "sidenav open" : "sidenav close"}>
            <List className="menu-list" disablePadding dense>
                {items.map(({ label, name, ...rest }) => (
                <ListItem className="menu-item" key={name} button {...rest}>
                    <ListItemText>{label}</ListItemText>
                </ListItem>
                ))}
            </List>   
        </div>
    )
}

export default Menu;