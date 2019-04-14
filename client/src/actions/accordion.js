import * as actionTypes from "./actionTypes";

export const openAccordion = date => {
  console.log('received date', date)
  return {
    type: actionTypes.OPEN_ACCORDION,
    date: date
  };
};
