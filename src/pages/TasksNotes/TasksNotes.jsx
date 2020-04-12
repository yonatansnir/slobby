import React from 'react';

import Tasks from '../../components/tasks/Tasks';
import Notes from '../../components/notes/Notes';

const TasksNotes = () => {
    return(
        <div className="page">
            <Tasks />
            <Notes />    
        </div>
    )
}

export default TasksNotes;