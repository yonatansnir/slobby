import { combineReducers } from 'redux'

import { userReducer } from './userReducer';
import { allUsersReducer } from './allUsersReducer';

export const mainReducer = combineReducers({
    user: userReducer,
    users: allUsersReducer
});