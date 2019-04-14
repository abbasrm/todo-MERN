import axios from 'axios';

import * as actionTypes from './actionTypes';

const setAddTask = task => {
  return {
    type: actionTypes.ADD_TASK,
    task,
  };
};

const openAcco = (date, status) => {
  return {
    type: actionTypes.OPEN_ACCORDION,
    date,
    status,
  };
};

const setTasks = tasks => {
  return {
    type: actionTypes.INIT_TASKS,
    tasks: tasks,
  };
};

const setDeleteTask = delId => {
  return {
    type: actionTypes.DELETE_TASK,
    delId,
  };
};

export const deleteTask = delId => {
    return dispatch => {
    axios
      .delete('/api/todo/' + delId)
      .then(res => {
        dispatch(setDeleteTask(delId));
      })
      .catch(err => console.log(err));
  };
};

export const addTask = newTask => {
  return dispatch => {
    const task = {
      title: newTask.title,
      detail: newTask.detail,
      done: newTask.done,
      date: newTask.date,
      viewDate: newTask.viewDate,
    };

    axios.post('/api/todo', task).then(res => {
      dispatch(openAcco(res.data.viewDate, true));
      dispatch(setAddTask(res.data));
    });
  };
};

export const initTasks = () => {
  return dispatch => {
    const tasks = [];

    axios.get('/api/todo').then(res => {
      for (let id in res.data) {
        tasks.push({
          ...res.data[id],
        });
      }

      dispatch(setTasks(tasks));
    });
  };
};

const setOnTaskDone = task => {
  return {
    type: actionTypes.ON_TASK_DONE,
    task,
  };
};

export const onTaskDone = (task, tasks) => {
  tasks = tasks.filter(t => t._id !== task._id);
  return async dispatch => {
    const t = await axios.put(`/api/todo/${task._id}`, { done: !task.done });
    dispatch(setTasks(tasks));
    dispatch(setOnTaskDone(task));
  };
};
