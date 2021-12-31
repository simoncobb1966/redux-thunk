import React, { Fragment, useEffect, useState } from 'react';
import withUsers from './components/users/withUsers';
import withTasks from './components/tasks/withTasks';
import SimpleSelect from './components/commonComponents/simpleSelect/SimpleSelect';
import Edit from './components/helpers/Edit';
import isEmpty from './utils/isEmpty';
import './style.css';

const Home = ({ error, isLoading, tasks, users, funcUpdateUser, funcAddUser, funcDeleteUser, funcUpdateTask, funcAddTask, funcDeleteTask, funcFetchUsers }) => {

    useEffect(() => {
        funcFetchUsers()
    }, [funcFetchUsers])

    const [state, setState] = useState({ firstName: '', lastName: '', task: 0 });
    const [newTask, setNewTask] = useState('')

    const inputHandler = (event) => {
        if (event.target.id === 'newTask') { setNewTask(event.target.value); return };
        const { id, value } = event.target;
        setState({ ...state, [id]: value });
    };

    const addNewUser = () => {
        funcAddUser({ ...state, task: +state.task, avatar: 'https://simoncobb.co.uk/assets/simons%20face.jpg' });
        setState({ ...state, firstName: '', lastName: '', task: 0 });
    }

    const addNewTask = () => {
        funcAddTask(newTask);
        setNewTask('');
    }

    function changeTask(event, i) {
        funcUpdateUser({ userUUID: i, field: 'task', value: +event.target.value });
    }

    const deleteTask = (event) => {
        funcDeleteTask(+event.target.value)
    }

    const submitEditedTask = (strNewTask, uuid) => {
        funcUpdateTask({ strNewTask: strNewTask, uuid: uuid })
    }

    const submitEditedLastName = (strLastName, uuid) => {
        funcUpdateUser({ userUUID: uuid, field: 'lastName', value: strLastName })
    }

    const deleteUser = (uuid) =>{
        funcDeleteUser(uuid)
    }
    
console.log(users[0]);

    return (
        <Fragment>
            <div className='container'>
                <div className='users'>
                    <p>List of users</p>
                    {isLoading && <h1>Loading</h1>}
                    {error && <p>{error}</p>}
                    {users.map((user) =>
                        <div key={user.uuid} className='userDiv'>
                            <img src={user.avatar} alt='avatar' />
                            <div className='nameEdit'>
                                <p>{user.fullName}</p>
                                <Edit
                                strValue={user.lastName}
                                funcSubmit={(strValue) => submitEditedLastName(strValue, user.uuid)}
                            />
                            <button
                            type='button'
                            onClick={()=>deleteUser(user.uuid)}
                            >Delete</button>
                            </div>
                            {!isEmpty(tasks) &&
                                <div><p>{tasks[user.task].task}</p></div>
                            }
                            <SimpleSelect
                                items={tasks}
                                display='task'
                                funcOnChange={(event) => changeTask(event, user.uuid)}
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
                        <hr />
                        <p>List of tasks</p>
                        {tasks.map((task, i) => {
                            return (
                                <div key={i}>
                                    <span>
                                        {task.task}
                                        <button value={task.uuid} type='button' onClick={deleteTask}>Delete</button>
                                        <Edit
                                            strValue={task.task}
                                            funcSubmit={(strValue) => submitEditedTask(strValue, task.uuid)}
                                        />
                                    </span>

                                </div>
                            )
                        })}
                        <hr />
                        <p>Tasks / number of times used</p>
                        {tasks.map((task, i) => {
                            return (
                                <p key={i}>{task.task}:- used {users.filter((user) => {
                                    return user.task === task.uuid
                                }).length} times
                                </p>
                            )
                        })}
                    </Fragment>
                </div>
            </div>
        </Fragment>
    );
}

export default withTasks(withUsers(Home));
