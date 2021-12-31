export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export const addTask = task => ({
    type: ADD_TASK, 
    payload: task
})
export const deleteTask = uuid => ({
    type: DELETE_TASK,
    payload: uuid
})
export const updateTask = payload => ({
    type: UPDATE_TASK,
    payload: { ...payload }
})