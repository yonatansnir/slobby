import React from 'react';
import { useSelector } from 'react-redux';

import Hamburger from './Hamburger';
import Icons from '../Icons/Icons';


const Header = () => {
    const user = useSelector(state => state.user);
    return(
        <header>
            <div>
                <Hamburger />
                <h1>Slobby</h1>
            </div>
            <div>
                <Icons icon="bell" />
                <Icons icon="account" />
                <div>{user.name.toUpperCase()}</div>
            </div>
        </header>
    )
}

export default Header;