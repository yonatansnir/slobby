import React from 'react';

const Users = () => {
    return(
        <div className="page">
            <h2>Users Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Yonatan</td>
                        <td>asd@gmal.com</td>
                        <td>Clucrk</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Yonatan</td>
                        <td>asd@gmal.com</td>
                        <td>Clucrk</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Yonatan</td>
                        <td>asd@gmal.com</td>
                        <td>Clucrk</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users;