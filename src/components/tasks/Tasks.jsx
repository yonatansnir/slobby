import React, { useState } from 'react';
import TaskItem from './TaskItem';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'first', completed: false},
        {id: 2, title: 'first', completed: true},
        {id: 3, title: 'first', completed: false},
        {id: 4, title: 'first', completed: false},
        {id: 5, title: 'first', completed: false}
    ])
    
    // NOT WORKING YET.
    const handleChange = (id) => {
        let arr = [...tasks];
        let i = arr.findIndex(t => t.id === id);
        arr[i].completed = !arr[i].completed;
        setTasks([...arr]);
    }
    return (
        <div className="tasks">
            <ul>
                {tasks.map(task => <TaskItem task={task} />)}
            </ul>
        </div>
    )
}

export default Tasks;