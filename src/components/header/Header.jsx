import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Hamburger from './Hamburger';
import Icons from '../Icons/Icons';
import UserDD from '../dropdown/UserDD';
import NotificationsDD from '../dropdown/NotificationsDD';


const Header = () => {
    const [showDp, setShopDp] = useState('');
    const user = useSelector(state => state.user);

    const showDropDown = (which) => {
        if (which === "notifications"){
            setShopDp('notifications')
        }
        if (which === "account-dp"){
            setShopDp('account-dp')
        }
        if (which === showDp){
            setShopDp('')
        }

    }

    return(
        <header>
            <div>
                <Hamburger />
                <h1>Slobby</h1>
            </div>
            <div>
                <div onClick={() => showDropDown('notifications')}>
                    <Icons icon="bell" />
                    {showDp === "notifications" ? <NotificationsDD /> : "" }
                </div>
                <div onClick={() => showDropDown('account-dp')}>
                    <Icons icon="account"/>
                    {showDp === "account-dp" ? <UserDD /> : "" }
                </div>
                <div>{user ? user.name.toUpperCase() : ""}</div>
            </div>
        </header>
    )
}

export default Header;