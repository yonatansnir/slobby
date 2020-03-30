import React, { Fragment, useState } from 'react';
import Input from '../../components/form-element/Input';

const Login = () => {
    const [form, setForm] = useState({ user: '', password: '' })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return(
        <div className="login">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>WELCOME</h2>
                <Input
                    label="USER NAME"
                    name="user"
                    handleChange={handleChange}
                />
                <Input
                    label="PASSWORD"
                    name="password"
                    handleChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Login;