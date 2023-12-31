// src/actions.js
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';


export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (taskId, updatedTask, updatedEmail) => ({
  type: EDIT_TASK,
  payload: { taskId, 
            updatedTask,
            updatedEmail },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
