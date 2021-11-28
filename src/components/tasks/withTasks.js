import React from 'react';
import { connect } from 'react-redux';
import {addTask} from '../../redux/actions/actionsTasks';

export function withTasks(WrappedComponent) {

  const HOC = (props) => <WrappedComponent {...(props)} />;

  const mapDispatchToProps = {
  funcAddTask: addTask
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