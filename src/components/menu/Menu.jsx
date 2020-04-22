import React from 'react';
import { useHistory } from "react-router-dom";

const Menu = ({ openMenu, setOpenMenu, setClickMenu }) => {
    const history = useHistory();
    const items = [
        { name: 'dashboard', url:'/', label: 'Dashboard' },
        { name: 'tasknotes', url:'/tasknotes', label: 'Tasks Notes' },
        { name: 'users', url: '/users', label: 'Users' },
      ]
    
    const goTo = (url) => {
        history.push(url);
        setOpenMenu(false);
        setClickMenu(true);
    }
    return(
        <div className={openMenu ? "sidenav open" : "sidenav close"} >
            {items.map(item => (
                <div className="menu-item" onClick={() => goTo(item.url) }>
                    {item.label}
                </div>
            ))}
        </div>
    )
}

export default Menu;