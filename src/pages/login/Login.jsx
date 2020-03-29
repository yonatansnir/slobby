import React, { Fragment } from 'react';
import Input from '../../components/form-element/Input';

const Login = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return(
        <div className="login">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Login</h2>
                <Input label="User Name" name="user" handleChange={handleChange} />
                <Input label="Password" name="password" handleChange={handleChange} />
            </form>
        </div>
    )
}

export default Login;