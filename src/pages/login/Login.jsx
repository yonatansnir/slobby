import React, { useState } from 'react';
import Input from '../../components/form-element/Input';
import CheckBox from '../../components/form-element/CheckBox';
import Button from '../../components/form-element/Button';
import Icons from '../../components/Icons/Icons';

const Login = () => {
    const [form, setForm] = useState({ user: '', password: '' })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return(
        <div className="page login">
            <form onSubmit={(e) => e.preventDefault()}>
                <Icons icon="account" />
                <h2>WELCOME ABOURD</h2>
                <Input
                    label="USER NAME"
                    name="user"
                    icon="user"
                    handleChange={handleChange}
                />
                <Input
                    label="PASSWORD"
                    name="password"
                    icon="key"
                    handleChange={handleChange}
                />
                <CheckBox
                    label="Keep Me Sign In"
                    name="keepSignIn"
                    handleChange={handleChange}
                />
                <Button text="LOGIN" styleClass="btn btn-green" handleClick={() => console.log('Hey')} />
            </form>
        </div>
    )
}

export default Login;