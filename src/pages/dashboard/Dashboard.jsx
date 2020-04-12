import React from 'react';
import Card from '../../components/card/Card';

const CARDS = [
    {text: "Guests", number: 455},
    {text: "Complaints", number: 4},
    {text: "Tasks", number: 12},
    {text: "Packages", number: 21}
]

const Dashboard = () => {
    return(
        <div className="page">
            <h2>Dashboard</h2>
            <div className="content dashboard">
                <div className="row">
                    {CARDS.map(card => <Card data={card} />)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;