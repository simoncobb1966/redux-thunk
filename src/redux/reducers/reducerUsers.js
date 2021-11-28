import { UPDATE_USER, ADD_USER, FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/actionsUsers';

export const usersState = {
    users: [],
    isLoading: false,
    error: null
};

const reducerUsers = (state = usersState, action) => {
    const {type, payload} = action; 
    switch (type) {
        case UPDATE_USER:
            let user=state.users[payload.user];
            user[payload.field]=payload.value;
            return {
                ...state,
            };

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
                users: payload
            };


        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                users: []
            };

            case ADD_USER:
                const newUser={ ...action.payload, uuid:state.users.length}
                const users = state.users;
                users.push(newUser)
                return {
                    ...state,
                    users: users
                };

        default: return state;
    }
}

export default reducerUsers;