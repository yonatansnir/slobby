import React from 'react';
import CheckBox from '../form-element/CheckBox';

const TaskItem = ({ task, handleChange }) => (
    <li className={task.completed ? 'completed' : ''}>
        <CheckBox label={task.title} check={task.completed} handleChange={() => handleChange(task.id)} />
    </li>
)

export default TaskItem;