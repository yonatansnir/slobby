import React from 'react';
import CardIcons from './CardIcons';

const CardItem = ({ cardData }) => (
    <div className="card-item">
        <CardIcons type={cardData.type} />
        <div>
            <h2>{cardData.number}</h2>
            <p>{cardData.desc}</p>
        </div>
    </div>
)

export default CardItem;