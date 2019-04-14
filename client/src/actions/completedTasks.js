import axios from 'axios';
import * as actionTypes from './actionTypes';

const setCompletedTasks = tasks => {
  return {
    type: actionTypes.INIT_COMPLETED_TASKTS,
    tasks: tasks,
  };
};

export const initCompletedTasks = () => {
  return dispatch => {
    const tasks = [];

    axios.get('/api/todo?done=true').then(res => {
      for (let id in res.data) {
        tasks.push({
          ...res.data[id],
        });
      }

      dispatch(setCompletedTasks(tasks));
    });
  };
};

const setDeleteCompletedTask = delId => {
  return {
    type: actionTypes.DELETE_COMPLETED_TASK,
    delId,
  };
};

export const deleteCompletedTask = delId => {
  return dispatch => {
    axios
      .delete('/api/todo/' + delId)
      .then(res => {
        dispatch(setDeleteCompletedTask(delId));
      })
      .catch(err => console.log(err));
  };
};

const setOnTaskUndone = task => {
  return {
    type: actionTypes.ON_TASK_UNDONE,
    task,
  };
};

export const onTaskUndone = (task, tasks) => {
  console.log('onTaskUndone', tasks, task);
  tasks = tasks.filter(t => t._id !== task._id);
  return async dispatch => {
    const t = await axios.put(`/api/todo/${task._id}`, { done: !task.done });
    dispatch(setCompletedTasks(tasks));
    dispatch(setOnTaskUndone(task));
  };
};
