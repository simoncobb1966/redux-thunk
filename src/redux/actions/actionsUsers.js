export const fetchUsers=()=>{
    return dispatch => {
        dispatch(fetchUsersBegin());
        return fetch("https://randomuser.me/api/?results=10&nat=gb")
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(fetchUsersSuccess(json.results.map((user)=> {return {uuid:user.login.uuid, firstName: user.name.first, lastName: user.name.last, avatar:user.picture.thumbnail, task:0}})         
                ));
            return json.results;
          })
          .catch(error => dispatch(fetchUsersFailure(error)));
      };  
}

const handleErrors=(response)=> {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const FETCH_USERS_BEGIN   = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const addUser = user => ({type: ADD_USER, payload: user})

export const updateUser = payload => ({type: UPDATE_USER, payload:payload})

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
  });
  
  export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
  });
  
  export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
  });