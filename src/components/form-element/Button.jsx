import React from 'react';

const Button = ({ text, styleClass, handleClick }) => (
    <button className={styleClass} onClick={handleClick}>{text}</button>
)

export default Button;