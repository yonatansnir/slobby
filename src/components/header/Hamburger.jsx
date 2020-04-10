import React, {useState} from 'react';
import Menu from '../menu/Menu'

const items = [
    { name: 'board', label: 'Board' },
    { name: 'users', label: 'Users' },
    { name: 'guest', label: 'Guest' },
  ]

const Hamburger = () => {
    const [clickMenu, setClickMenu] = useState(true);

    const [openMenu, setOpenMenu] = useState(false);
 
    const handleMenuClick = () =>{
        setClickMenu(!clickMenu);
        setOpenMenu(!openMenu);
    }
    return(
        <React.Fragment>
            <div 
                className={clickMenu ? 'hamburger close' : 'hamburger open' } 
                onClick={handleMenuClick}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Menu items = {items} openMenu = {openMenu} setOpenMenu = {setOpenMenu}/>
        </React.Fragment>
    )
}

export default Hamburger;