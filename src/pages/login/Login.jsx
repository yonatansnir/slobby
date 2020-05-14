import React from 'react';

import UserIcon from '../icons/LoginIcon';
import PasswordIcon from '../icons/PasswordIcon';
import LoginIcon from '../icons/UserIcon';

const Login = () => {
    return(
        <div className="login">
            <form onSubmit={(e) => e.preventDefault()}>
            <UserIcon />
                <h2>התחבר</h2>
                <div className="row">
                    <input id="user" type="text" required /><label htmlFor="user">שם משתמש</label><span></span>
                    <LoginIcon />
                </div>
                <div className="row">
                    <div>שכחת סיסמא?</div>
                    <input id="password" type="password" required /><label htmlFor="password">סיסמא</label><span></span>
                    <PasswordIcon />
                </div>
                <button className="btn btn-blue">התחבר</button>
                <label className="remember-me"><input type="checkbox" /> זכור אותי</label>
            </form>
        </div>
    )
}

export default Login;