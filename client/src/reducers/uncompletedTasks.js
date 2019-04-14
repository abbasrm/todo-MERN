import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

const completedTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_UNCOMPLETED_TASKTS:
      return {
        ...state,
        tasks: action.tasks,
      };

    case actionTypes.DELETE_UNCOMPLETED_TASK:
    const tasks = [...state.tasks.filter(elem => elem._id !== action.delId)];
      return {
        ...state,
        tasks,
      };

    case actionTypes.ON_TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
      };

    default:
      return state;
  }
};

export default completedTasksReducer;
