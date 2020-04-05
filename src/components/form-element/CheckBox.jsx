import React from 'react';

const CheckBox = ({ label, name, check, handleChange }) => (
    <>
        <label className="check-box"><input type="checkbox" name={name} checked={check} onChange={handleChange} /> {label} </label>
    </>
)

export default CheckBox;