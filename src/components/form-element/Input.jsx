import React from 'react';

const Input = ({ label, name, handleChange }) => (
    <div className="form-row">
        <input type={name === "password" ? "password" : "text"} id={name} name={name} onChange={handleChange} required autoComplete="off" />
        <label htmlFor={name}>{label}</label>
    </div>
)

export default Input;