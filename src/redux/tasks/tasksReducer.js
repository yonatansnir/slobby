import TASKS_DATA from './tasks.data';
import { tasksActionTypes } from './tasks-types';
import { updateTasks, addTask, removeTask } from './tasks-utils'

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

        case tasksActionTypes.ADD_TASK:
            return {
                ...state,
                tasksList: addTask(state.tasksList, action.payload)
            }
        
        case tasksActionTypes.REMOVE_TASK: 
            return {
                ...state,
                tasksList: removeTask(state.tasksList, action.payload)
        }
        default:
            return state;
    }
}