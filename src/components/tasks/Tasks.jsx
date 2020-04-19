import React from 'react';
import { connect } from 'react-redux'
import TaskItem from './TaskItem';

const Tasks = ({ tasks }) => {
    return (
        <div className="tasks">
            <div className="add-tasks-form">
                <input type="text" />
                <button className="btn btn-blue">ADD</button>
            </div>
            <ul>
                {tasks.map(task => <TaskItem key={task.id} task={task} />)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps)(Tasks);