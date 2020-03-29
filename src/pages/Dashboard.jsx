import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Table from '../components/table/Table';

const Dashboard = () => {
    return(
        <Fragment>
            <Header />
            <div className="data">
                <Table />
            </div>
        </Fragment>
    )
}

export default Dashboard;