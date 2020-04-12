import React from 'react';
import CardIcon from '../Icons/CardIcon';

const Card = ({ data }) => (
    <div className="card">
        <h4>{data.text}</h4>
        <h3>{data.number}</h3>
        <CardIcon name={data.text} />
    </div>
)

export default Card;