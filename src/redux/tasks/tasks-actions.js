import { tasksActionTypes } from './tasks-types';

export const updateTasks = (id) => ({
    type: tasksActionTypes.UPDATE_TASKS,
    payload: id
})