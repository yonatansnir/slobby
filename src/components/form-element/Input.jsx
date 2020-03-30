import React from 'react';
import Account from '../../assets/account.svg'
const Input = ({ label, name, handleChange }) => (
    <div className="form-row">
        <img src={Account} alt="account-image" />
        <input type={name === "password" ? "password" : "text"} id={name} name={name} onChange={handleChange} required autoComplete="off" />
        <label htmlFor={name}>{label}</label>
    </div>
)

export default Input;