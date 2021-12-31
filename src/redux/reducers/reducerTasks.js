import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/Tasks/actionTasks';
let id = 0;

export const tasksState = [
    { uuid: id++, task: 'Buy milk' },
    { uuid: id++, task: 'Feed cat' }
];

const reducerTasks = (state = tasksState, action) => {
    const { type, payload } = action;
    if (type === ADD_TASK) {
        const newPayload = { uuid: state.length, task: payload }
        return [...state, newPayload]
    };
    if (type === DELETE_TASK) {
        const filteredTasks = state.filter(task => payload !== task.uuid);
        return [...filteredTasks]
    }
    if (type === UPDATE_TASK) {
        const { strNewTask, uuid } = payload;
        const index = state.findIndex(task => task.uuid === uuid)
        let newState = [...state];
        newState[index].task = strNewTask
        return [...newState]
    }

    return state
}

export default reducerTasks
    ;