import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import '../../../css/bootstrap.min.css';
import styles from './Tasks.module.css';
import Task from '../Task/Task';
import AccordionSingle from '../../UI/AccodionSingle/AccodionSingle';
import * as actions from '../../../actions/index';

const Tasks = props => {
  // const completedTasks = props.tasks.filter((elem) => elem.done === true);

  const convertToViewDate = date => {
    const newDate = new Date(date),
      getTheDay = newDate.getDate(),
      getTheMonth = newDate.getMonth() + 1,
      getTheYear = newDate.getFullYear();
    return `${getTheDay}/${getTheMonth}/${getTheYear}`;
  };

  // * First way to comapre two dates including 'today' by converting 'viewDate' into Date type with current time
  // as these dates will be just created so they will have same time and that will results that we can catch 'today'
  // with the equal comparsion sign (=) when comapring the task date with today.

  // * Without this, it is almost impossible to get the current comparing time (that we get instantly from new Date())
  // same as the task creation time, weither it will be after or before.

  // 1.
  const convertViewtoDate = viewDate => {
    let splitDate = viewDate.split('/');
    let newDate = new Date();

    newDate.setDate(splitDate[0]);
    newDate.setMonth(splitDate[1] - 1);
    newDate.setFullYear(splitDate[2]);

    return newDate;
  };

  // Another solution is to set both times of the two dates before comparing, which is sightky better and safer as we are no depending
  // on the creation time of the tasks or today's date

  //2.
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

  // 1.
  // const today = new Date(),
  //   date1 = convertToViewDate(today);

  const viewTasks = props.tasks
    .filter(d => {
      // 1.
      // const d1 = convertViewtoDate(date1),
      //   d2 = convertViewtoDate(d.viewDate);

      // 2.
      const d1 = intializingDateTime(),
        d2 = intializingDateTime(d.date);

      return d1 <= d2;
    })
    .sort((a, b) => {
      a = new Date(a.date);
      b = new Date(b.date);
      return b > a ? -1 : b < a ? 1 : 0;
    });

  const furtherDates = viewTasks.map(task => task.viewDate),
    furtherDatesTasksArray = [...new Set(furtherDates)];

  // console.log(furtherDatesTasksArray)

  return props.tasks.length ? (
    furtherDatesTasksArray.map(date => {
      return (
        <AccordionSingle key={date} date={date}>
          {/* <table className={[classes["myTable"], classes["mb-2"]].join(' ')}> */}
          <table styleName="myTable" className="mb-2">
            <thead>
              <tr className="thead-dark">
                <th>Title</th>
                <th>Detail</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {viewTasks.map(el => {
                return date === convertToViewDate(el.date) ? (
                  viewTasks.length ? (
                    <Task
                      key={el._id}
                      task={el}
                      onChange={() => props.changeDone(el, viewTasks)}
                      onDelete={props.onDelete}
                    />
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center mx-auto text-success py-4"
                      >
                        All tasks are done..
                      </td>
                    </tr>
                  )
                ) : null;
              })}
            </tbody>
          </table>
        </AccordionSingle>
      );
    })
  ) : (
    <p>No tasks added yet.</p>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.ts.tasks,
    accordion: state.acco,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenAcco: date => dispatch(actions.openAccordion(date)),
    changeDone: (task, tasks) => dispatch(actions.onTaskDone(task, tasks)),
    onDelete: id => dispatch(actions.deleteTask(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Tasks, styles, { allowMultiple: true }));
