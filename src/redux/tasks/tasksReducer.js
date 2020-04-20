import TASKS_DATA from './tasks.data';
import { tasksActionTypes } from './tasks-types';
import { updateTasks } from './tasks-utils'


const INITAIL_STATE = {
    tasksList: TASKS_DATA
}

export const tasksReducer = (state=INITAIL_STATE, action) => {
    switch (action.type) {
        case tasksActionTypes.UPDATE_TASKS:
            return {
                ...state,
                tasksList: updateTasks(state.tasksList, action.payload)
            }
        default:
            return state;
    }
}