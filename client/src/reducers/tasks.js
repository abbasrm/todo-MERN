import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };

    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };

    case actionTypes.DELETE_TASK:
      const tasks = [...state.tasks.filter(elem => elem._id !== action.delId)];
      return {
        ...state,
        tasks,
      };

    case actionTypes.ON_TASK_UNDONE:
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
      };

    default:
      return state;
  }
};

export default tasksReducer;
