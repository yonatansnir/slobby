import TASKS_DATA from './tasks.data';
import { tasksActionTypes } from './tasks-types';
import { updateTasks } from './tasks-utils'


const INITAIL_STATE = {
    tasks: TASKS_DATA
}

export const tasksReducer = (state=INITAIL_STATE, action) => {
    switch (action.type) {
        case tasksActionTypes.UPDATE_TASKS:
            return {
                ...state,
                tasks: updateTasks(state.tasks, action.payload)
            }
        default:
            return state;
    }
}