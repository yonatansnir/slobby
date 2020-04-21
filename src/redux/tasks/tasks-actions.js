import { tasksActionTypes } from './tasks-types';

export const updateTasks = (id) => ({
    type: tasksActionTypes.UPDATE_TASKS,
    payload: id
})

export const addTask  = task => ({
    type: tasksActionTypes.ADD_TASK,
    payload: task
})


export const removeTask = taskId => ({
    type: tasksActionTypes.REMOVE_TASK,
    payload: taskId
})
