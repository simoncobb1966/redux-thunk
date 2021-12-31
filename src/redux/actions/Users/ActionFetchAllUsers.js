import ModelUser from '../../../models/ModelUser';
const axios = require('axios');

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return axios.get("https://randomuser.me/api/?results=10&nat=gb")
      .then(response => {
        const users = response.data.results.map((user) => new ModelUser(user.login.uuid, user.name.first, user.name.last, user.picture.thumbnail,0))
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
       return dispatch(fetchUsersFailure(`Failed to fetch Users. ${error.message}, ActionFetchAllUsers`))
      })
  };
}

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
  });
  
  export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
  });
  
  export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error
  });