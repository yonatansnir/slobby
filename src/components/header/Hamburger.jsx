import React, {useState} from 'react';
import Menu from '../menu/Menu';

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
            <Menu
             openMenu={openMenu}
             setOpenMenu={setOpenMenu}
             setClickMenu={setClickMenu}
            />
        </React.Fragment>
    )
}

export default Hamburger;