// src/TodoList.js
import React , { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch ,} from 'react-redux';
import {  editTask, deleteTask, getUsers } from '../redux/actionRedux';

const TodoList = ({ tasks, editTask, deleteTask }) => {

  const users = useSelector((state) => state.users);
  console.log(users)
  const dispatch = useDispatch();


  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2> List</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.text}</td>
                <td>{task.mail}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm mr-2"
                    onClick={() => {
                      const updatedText = prompt('Edit task:', task.text);
                      const updatedEmail = prompt('Edit email:', task.email);
                      editTask(task.id, updatedText, updatedEmail);
                      // editTask(task.id, prompt('Edit task:', task.text))
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,

});

const mapDispatchToProps = {
  editTask,
  deleteTask,

};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
