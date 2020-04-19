

export const updateTasks = (tasks, id) => {
    return tasks.map(t => 
        t.id === id ?
         { ...t, completed: !t.completed } 
         : t
         )
}