import React from 'react';

const CheckBox = ({ label, name, handleChange }) => (
    <>
        <label class="check-box"><input type="checkbox" name={name} onChange={handleChange} /> {label} </label>
    </>
)

export default CheckBox;