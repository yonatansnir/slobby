import React, { useState } from 'react';
import Input from '../../components/form-element/Input';
import CheckBox from '../../components/form-element/CheckBox';
import Button from '../../components/form-element/Button';
import Icons from '../../components/Icons/Icons';
import { userLogin } from '../../utils/userAPI';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ user: '', password: '', keepSignIn: false })
    const [msg, setMsg] = useState({ class: "hide" })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleLogin = () => {
        if (userLogin(form.user, form.password, dispatch)){
            alert('everything good!')
            return;
        }
        setMsg({ class: "" })
    }

    return(
        <div className="page login">
            <form onSubmit={(e) => e.preventDefault()}>
                <Icons icon="account" />
                <h2>WELCOME ABOURD</h2>
                <span className={msg.class}>User Or passWord incorrect</span>
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
                    check={form.keepSignIn}
                    handleChange={() => setForm({...form, keepSignIn: !form.keepSignIn})}
                />
                <Button text="LOGIN" styleClass="btn btn-green" handleClick={handleLogin} />
            </form>
        </div>
    )
}

export default Login;