export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const addUser = user => ({
  type: ADD_USER,
  payload: user
})

export const deleteUser = uuid => ({
  type: DELETE_USER,
  payload: uuid
})

export const updateUser = payload => ({
  type: UPDATE_USER,
  payload: payload
})
