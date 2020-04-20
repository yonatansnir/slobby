import { combineReducers } from 'redux'

import { userReducer } from './userReducer';
import { allUsersReducer } from './allUsersReducer';
import { tasksReducer } from './tasks/tasksReducer'

export const mainReducer = combineReducers({
    user: userReducer,
    users: allUsersReducer,
    tasks: tasksReducer
});