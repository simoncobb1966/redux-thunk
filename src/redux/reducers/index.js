import { combineReducers } from 'redux';
import reducerUsers from './reducerUsers';
import reducerTasks from './reducerTasks';

export default combineReducers({
    reducerUsers,
    reducerTasks,
})