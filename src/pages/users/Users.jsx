import React from 'react';
import Button from '../../components/form-element/Button';
import Icons from '../../components/Icons/Icons';
import AddUser from '../../components/users/AddUser';

const Users = () => {
    return(
        <div className="page">
            <h2>Users Page</h2>
            <div className="content">
                <div className="search-field">
                    <input type="text" placeholder="Just start type..." /><Icons icon="search" />
                    <Button
                        text="Add New User"
                        styleClass="btn btn-green"
                        handleClick={() => alert('hello world')}
                    />
                </div>
                <div className="login">
                    <AddUser />
                </div>
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
        </div>
    )
}

export default Users;