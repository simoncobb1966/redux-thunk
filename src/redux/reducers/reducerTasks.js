import { ADD_TASK } from '../actions/actionsTasks';
let id = 0;

export const tasksState = [
    { uuid: id++, task:'Buy milk'},
    { uuid: id++, task: 'Feed cat'}
];

const reducerTasks = (state = tasksState, action) => {
    const { type, payload } = action; 
    if (type === ADD_TASK) {
        const newPayload={ uuid:state.length, task:payload}
        return [ ...state, newPayload]
    };

    return state
}

export default reducerTasks
;