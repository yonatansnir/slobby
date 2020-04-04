import React from 'react';
import Icons from '../Icons/Icons';

const Input = ({ label, name, icon, handleChange }) => (
    <div className="form-row">
        <input type={name === "password" ? "password" : "text"} id={name} name={name} onChange={handleChange} required autoComplete="off" />
        <Icons icon={icon} />
        <label htmlFor={name}>{label}</label>
    </div>
)

export default Input;