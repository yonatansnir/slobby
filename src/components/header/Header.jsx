import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Hamburger from './Hamburger';
import Icons from '../Icons/Icons';
import UserDD from '../dropdown/UserDD';


const Header = () => {
    const [dropdown, setDropdown] = useState("")
    const user = useSelector(state => state.user);

    const showDropDown = (which) => {
        if (which === "notifications"){
            setDropdown("notifications")
            return;
        }
        if (which === "user-menu"){
            setDropdown("user-menu")
            return;
        }
        setDropdown("")
    }

    return(
        <header>
            <div>
                <Hamburger />
                <h1>Slobby</h1>
            </div>
            <div>
                <Icons icon="bell" showDropDown={showDropDown} />
                <Icons icon="account" showDropDown={showDropDown} />
                {dropdown === "user-menu" ? <UserDD /> : "" }
                <div>{user ? user.name.toUpperCase() : ""}</div>
            </div>
        </header>
    )
}

export default Header;