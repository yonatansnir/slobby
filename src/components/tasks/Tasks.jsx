import React, { useState } from 'react';
import TaskItem from './TaskItem';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'firs task', completed: false},
        {id: 2, title: 'you must know the lol', completed: true},
        {id: 3, title: 'its working fine i think', completed: false},
        {id: 4, title: 'Now everything good', completed: false},
        {id: 5, title: 'Yes Yes Yes', completed: false}
    ])
    
    const handleChange = (id) => {
        let arr = [...tasks];
        let i = arr.findIndex(t => t.id === id);
        arr[i].completed = !arr[i].completed;
        setTasks([...arr]);
    }
    return (
        <div className="tasks">
            <div className="add-tasks-form">
                <input type="text" />
                <button className="btn btn-blue">ADD</button>
            </div>
            <ul>
                {tasks.map(task => <TaskItem task={task} handleChange={handleChange} />)}
            </ul>
        </div>
    )
}

export default Tasks;