import React from 'react';
import Card from '../../components/card/Card';

const Dashboard = () => {
    return(
        <div className="page">
            <h2>Dashboard</h2>
            <div className="content dashboard">
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;