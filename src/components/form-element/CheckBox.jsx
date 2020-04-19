import React from 'react';

const CheckBox = ({ label, name, check, updateTasks }) => (
    <>
        <label className="check-box"><input type="checkbox" name={name} checked={check} onChange={updateTasks} /> {label} </label>
    </>
)

export default CheckBox;