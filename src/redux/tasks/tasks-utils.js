

export const updateTasks = (tasksList, id) => {
    return tasksList.map(t => 
        t.id === id ?
         { ...t, completed: !t.completed } 
         : t
         )
}

export const addTask = (tasksList, task) => {
    const lastId = tasksList[tasksList.length-1].id;
    tasksList.push({ id: lastId+1, title: task, completed: false }) 
    return tasksList
}

export const removeTask = (tasksList, taskId) => {
    return tasksList.filter(task => task.id !== taskId)
}