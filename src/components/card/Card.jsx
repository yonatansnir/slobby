import React from 'react';
import CardIcon from '../Icons/CardIcon';

const Card = ({ data }) => (
    <div className={`card ${data.text}`}>
        <h3>{data.number}</h3>
        <h4>{data.text}</h4>
        <CardIcon name={data.text} />
    </div>
)

export default Card;