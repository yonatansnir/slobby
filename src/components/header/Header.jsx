import React from 'react';
import Hamburger from './Hamburger';

const Header = () => {
    return(
        <header>
            <Hamburger />
            <h1>Slobby</h1>
            <div>user name | notifications</div>
        </header>
    )
}

export default Header;