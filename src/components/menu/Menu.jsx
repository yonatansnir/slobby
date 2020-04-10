import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Menu = () => {
    return(
        <div className="sidenav">
            <List disablePadding dense>
                <ListItem className="menuItem" button>
                    <ListItemText>Board</ListItemText>
                </ListItem>
                <ListItem className="menuItem" button>
                    <ListItemText>Users</ListItemText>
                </ListItem>
                <ListItem className="menuItem" button>
                    <ListItemText>Guest</ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Menu;