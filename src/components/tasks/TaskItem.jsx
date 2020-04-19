import React from 'react';
import { connect } from 'react-redux';
import CheckBox from '../form-element/CheckBox';

import { updateTasks } from '../../redux/tasks/tasks-actions'

const TaskItem = ({ task, updateTasks }) => (
    <li className={task.completed ? 'completed' : ''}>
        <CheckBox label={task.title} check={task.completed} updateTasks={() => updateTasks(task.id)} />
    </li>
)

const mapDisptachToProps = dispatch => ({
    updateTasks: (id) => dispatch(updateTasks(id))
})

export default connect(null, mapDisptachToProps)(TaskItem);