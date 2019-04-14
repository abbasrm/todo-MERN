import * as actionTypes from "../actions/actionTypes";

const initialState = {
  date: null,
  open: false
};

const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_ACCORDION:
      console.log('reducer data', action.date)
      console.log('acc state', state)
      if (state.date !== action.date && state.open) {
        return {
          date: action.date,
          open: true
        };
      } else {
        return {
          date: action.date,
          open: action.status ? action.status : !state.open
        };
      }

    default:
      return state;
  }
};

export default accordionReducer;

// The if statement functionality, if (state.date !== action.date && state.open)
// * If you have an opened accordion and you click on another one, the new clicked accordion tap will be
// opened and the previous one will be closed.
// * Withouth this condition, the current opened accordion will just be closed by click on a new accordion tap
// and the new one won't be opened instantly.

// So this condition simply, will always open the new clicked accodrion tap when clicking on a different date accordion tap, while it will toggle on same date click accordion tap.

// else toggle the current state open/close
