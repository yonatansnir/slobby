import React from 'react';
import Hamburger from './Hamburger';
import Icons from '../Icons/Icons';

const Header = () => {
    return(
        <header>
            <div>
                <Hamburger />
                <h1>Slobby</h1>
            </div>
            <div>
                <Icons icon="bell" />
                <Icons icon="account" />
            </div>
        </header>
    )
}

export default Header;