import React from 'react';
import { connect } from 'react-redux';
import {addUser, deleteUser, updateUser, fetchUsers} from '../../redux/actions/Users/index';

export function withUsers(WrappedComponent) {

  const HOC = (props) => <WrappedComponent {...(props)} />;

  const mapDispatchToProps = {
  funcAddUser: addUser,
  funcDeleteUser: deleteUser,
  funcFetchUsers: fetchUsers,
  funcUpdateUser: updateUser,
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
      users: state.reducerUsers.users,
      isLoading: state.reducerUsers.isLoading,
      error: state.reducerUsers.error,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}

export default withUsers;
