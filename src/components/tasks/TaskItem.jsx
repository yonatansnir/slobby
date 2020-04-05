import React from 'react';
import CheckBox from '../form-element/CheckBox';

const TaskItem = ({ task }) => (
    <li className={task.completed ? 'completed' : ''}>
        <CheckBox label={task.title} />
    </li>
)

export default TaskItem;