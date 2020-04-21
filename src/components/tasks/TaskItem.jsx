import React from 'react';
import { useDispatch } from 'react-redux';
import CheckBox from '../form-element/CheckBox';

import { updateTasks, removeTask } from '../../redux/tasks/tasks-actions'

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    return (
    <li className={task.completed ? 'completed' : ''}>
        <CheckBox label={task.title} check={task.completed} handleChange={() => dispatch(updateTasks(task.id))} />
        <div className='clear-item-cotainer' onClick={() => dispatch(removeTask(task.id))}>
            <span>x</span>
        </div>
    </li>
)}


export default TaskItem;