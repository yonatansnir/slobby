import React from 'react';

import Input from '../form-element/Input';
import Button from '../form-element/Button';

const AddUser = () => (
    <form onSubmit={(e) => e.preventDefault()}>
        <h2>Add New User</h2>
        <Input
            label="USER NAME"
            name="user"
            icon="user"
            handleChange={() => alert('hello')}
        />
        <Input
            label="PASSWORD"
            name="password"
            icon="key"
            handleChange={() => alert('hello')}
        />
        <Button
            text="ADD"
            styleClass="btn btn-green"
        />
    </form>
)

export default AddUser;