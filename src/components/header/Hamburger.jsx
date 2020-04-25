import React, {useState} from 'react';
import Menu from '../menu/Menu';

const Hamburger = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return(
        <React.Fragment>
            <div 
                className={openMenu ? 'hamburger open' : 'hamburger close' } 
                onClick={() => setOpenMenu(!openMenu)}
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
            />
        </React.Fragment>
    )
}

export default Hamburger;