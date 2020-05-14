import React from 'react';
import LoginIcon from '../icons/LoginIcon';

const Header = () => {
    return(
        <header>
            <div className="user">
                <LoginIcon />
                <div>
                    שם משתמש
                    <span><span></span>זמין</span>
                </div>
            </div>
            <div className="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;