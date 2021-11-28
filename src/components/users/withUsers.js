import React from 'react';
import { connect } from 'react-redux';
import {addUser, fetchUsers, updateUser} from '../../redux/actions/actionsUsers';

export function withUsers(WrappedComponent) {

  const HOC = (props) => <WrappedComponent {...(props)} />;

  const mapDispatchToProps = {
  funcAddUser: addUser,
  funcFetchUsers: fetchUsers,
  funcUpdateUser: updateUser,
  };

const sortUsers = (array) => {
  return { ...array, users:array.users.sort(function(a, b){
    var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
})    
}
}

  const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
      users: sortUsers(state.reducerUsers)
 
      
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}

export default withUsers;