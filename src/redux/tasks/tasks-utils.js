

export const updateTasks = (tasksList, id) => {
    return tasksList.map(t => 
        t.id === id ?
         { ...t, completed: !t.completed } 
         : t
         )
}