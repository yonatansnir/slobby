import React from 'react';
import { useDispatch } from 'react-redux';
import CheckBox from '../form-element/CheckBox';

import { updateTasks } from '../../redux/tasks/tasks-actions'

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    return (
    <li className={task.completed ? 'completed' : ''}>
        <CheckBox label={task.title} check={task.completed} handleChange={() => dispatch(updateTasks(task.id))} />
    </li>
)}


export default TaskItem;