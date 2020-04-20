import React from 'react';
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem';

const Tasks = () => {
    const tasksList = useSelector(state => state.tasks.tasksList);

    return (
        <div className="tasks">
            <div className="add-tasks-form">
                <input type="text" />
                <button className="btn btn-blue">ADD</button>
            </div>
            <ul>
                {tasksList.map(task => <TaskItem key={task.id} task={task} />)}
            </ul>
        </div>
    )
}



export default Tasks;