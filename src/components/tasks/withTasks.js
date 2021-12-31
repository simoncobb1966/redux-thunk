import React from 'react';
import { connect } from 'react-redux';
import {addTask, deleteTask,  updateTask} from '../../redux/actions/Tasks/actionTasks';

export function withTasks(WrappedComponent) {

  const HOC = (props) => <WrappedComponent {...(props)} />;

  const mapDispatchToProps = {
  funcAddTask: addTask,
  funcDeleteTask: deleteTask,
  funcUpdateTask: updateTask,
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
      tasks: state.reducerTasks
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}

export default withTasks;