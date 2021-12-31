import uuid from 'react-uuid'
import ModelUser from '../../models/ModelUser';
import { UPDATE_USER, ADD_USER, DELETE_USER } from '../actions/Users/ActionUsers';
import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/Users/ActionFetchAllUsers';
export const usersState = {
    users: [],
    isLoading: false,
    error: null
};

const reducerUsers = (state = usersState, action) => {
    const { type, payload } = action;

    const sortUsers = (array) => {
        return array.sort(function(a, b){
          var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      })}


    switch (type) {
        case UPDATE_USER:
            const { userUUID, field, value } = payload;
            let newUsers = [...state.users]
            let index = newUsers.findIndex(item => item.uuid === userUUID)
            newUsers[index][field]=value;
            if (field === 'lastName') {newUsers[index].fullName=`${newUsers[index].firstName} ${value}`};
            return {
                ...state, users: sortUsers(newUsers)
            }

        case FETCH_USERS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: sortUsers(payload),
            };


        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
                users: []
            };

        case ADD_USER:
            const { firstName, lastName, avatar, task } = payload;
            const users = state.users;
            users.push(new ModelUser (uuid(), firstName, lastName, avatar, task))
            return {
                ...state,
                users: sortUsers(users)
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.uuid !== payload)
            };

        default: return state;
    }
}

export default reducerUsers;