import React from 'react';

import CardItem from './CardItem';

const cardArr = [
    { type: "packages", number: 24, desc: "חבילות" },
    { type: "problems", number: 6, desc: "תקלות" },
    { type: "Tasks", number: 24, desc: "שלום" },
    { type: "parking", number: 22, desc: "חניות פנויות" }
]

const Cards = () => (
    <div className="cards">
        {cardArr.map(card => <CardItem cardData={card} />)}
    </div>
)

export default Cards;