import React, { Fragment, useEffect, useState } from 'react';
import withUsers from './withUsers';
import withTasks from '../tasks/withTasks';
import SimpleSelect from '../helpers/simpleSelect/SimpleSelect';
import  './style.css';

const Users = ({ tasks, users, funcUpdateUser, funcAddUser, funcAddTask, funcFetchUsers }) => {

    useEffect(() => {
        funcFetchUsers()
    }, [funcFetchUsers])

    const [state, setState] = useState({ firstName: '', lastName: '', task:0 });
    const [newTask, setNewTask] = useState('')

    const inputHandler = (event) => {
        if (event.target.id === 'newTask') { setNewTask(event.target.value); return };
        const { id, value } = event.target;
        setState({ ...state, [id]: value });
    };

    const addNewUser = () => {
        funcAddUser({ ...state, avatar: 'https://simoncobb.co.uk/assets/simons%20face.jpg', task:+state.task });
        setState({ ...state, firstName: '', lastName: '', task:0 });
    }

    const addNewTask = () => {
        funcAddTask(newTask);
        setNewTask('');
    }

    const changeTask = (event, i) => {
        funcUpdateUser({ user: i, field: 'task', value: +event.target.value })
    }

console.log(users.users);

    return (
        <Fragment>
            <div className='container'>
                <div className='users'>
                    <p>List of users</p>
                    {users.isLoading && <h1>Loading</h1>}
                    {users.users.map((user, i) =>
                        <div key={i} className='userDiv'>
                            <img src={user.avatar} alt='avatar' />
                            <p>{user.firstName} {user.lastName} {tasks[user.task].task}</p>
                            <SimpleSelect
                                items={tasks}
                                display='task'
                                funcOnChange={(event) => changeTask(event, i)}
                            />
                        </div>
                    )}

                    <p>Add New User</p>
                    <input
                        type='text'
                        id='firstName'
                        value={state.firstName}
                        onChange={inputHandler}
                        placeholder='First Name'
                    />
                    <input
                        type='text'
                        id='lastName'
                        value={state.lastName}
                        onChange={inputHandler}
                        placeholder='Last Name'
                    />
                    <SimpleSelect
                        items={tasks}
                        display='task'
                        funcOnChange={inputHandler}
                        value={state.task}
                        id='task'
                    />
                    <button
                        onClick={addNewUser}>Add new user</button>


                </div>
                <div className='tasks'>
                    <Fragment>
                        <input
                            type='text'
                            value={newTask}
                            onChange={(event) => setNewTask(event.target.value)}
                            placeholder='New Task'
                        />

                        <button
                            onClick={addNewTask}>Add New Task</button>
                        <p>Tasks / number of times used</p>
                        {tasks.map((task, i) => {
                            return (
                                <p key={i}>{task.task}:- used {users.users.filter((user)=> {
                                    return user.task === task.uuid}).length} times
                                </p>
                            )
                        })}
                    </Fragment>
                </div>
            </div>
        </Fragment>
    );
}

export default withTasks(withUsers(Users));
