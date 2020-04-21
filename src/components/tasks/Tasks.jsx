import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem';
import { addTask } from '../../redux/tasks/tasks-actions'

const Tasks = () => {
    const tasksList = useSelector(state => state.tasks.tasksList);
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    const onAddClick = () => {
        if (!input) {
            alert('Please enter a task')
        } else {
            dispatch(addTask(input));
            setInput('')
        }
    }

    return (
        <div className="tasks">
            <div className="add-tasks-form">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className="btn btn-blue" onClick={onAddClick}>ADD</button>
            </div>
            <ul>
                {tasksList.map(task => <TaskItem key={task.id} task={task} />)}
            </ul>
        </div>
    )
}



export default Tasks;