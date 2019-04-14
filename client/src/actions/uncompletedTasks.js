import axios from 'axios';
import * as actionTypes from './actionTypes';

const intializingDateTime = date => {
  let d;

  if (date) {
    const newDate = new Date(date);
    d = newDate.setHours(0, 0, 0, 0);
    return d;
  }

  const newDate = new Date();
  d = newDate.setHours(0, 0, 0, 0);
  return d;
};

const setUncompletedTasks = tasks => {
  return {
    type: actionTypes.INIT_UNCOMPLETED_TASKTS,
    tasks: tasks,
  };
};

export const initUncompletedTasks = () => {
  return dispatch => {
    const tasks = [];

    axios.get('/api/todo').then(res => {
      for (let id in res.data) {
        tasks.push({
          ...res.data[id],
        });
      }
      const viewTasks = tasks
        .filter(d => {
          const d1 = intializingDateTime(),
            d2 = intializingDateTime(d.date);

          return d1 > d2;
        })
        .sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return b < a ? -1 : b > a ? 1 : 0;
        });

      dispatch(setUncompletedTasks(viewTasks));
    });
  };
};

const setDeleteUncompletedTask = delId => {
  return {
    type: actionTypes.DELETE_UNCOMPLETED_TASK,
    delId,
  };
};

export const deleteUncompletedTask = delId => {
  return dispatch => {
    axios
      .delete('/api/todo/' + delId)
      .then(res => {
        dispatch(setDeleteUncompletedTask(delId));
      })
      .catch(err => console.log(err));
  };
};

const setOnTaskDone = task => {
  return {
    type: actionTypes.ON_TASK_DONE,
    task
  }
}

export const onUncompletedTaskDone = (task, tasks) => {
  tasks = tasks.filter(t => t._id !== task._id);
  return async dispatch => {
    const t = await axios.put(`/api/todo/${task._id}`, { done: !task.done });
    dispatch(initUncompletedTasks(tasks));
    dispatch(setOnTaskDone(task));
  };
};