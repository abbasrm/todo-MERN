import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import Task from '../Task/Task';
import styles from './UncompletedTasks.module.css';
import * as actions from '../../../actions/index';

class CompletedTasks extends Component {
  componentDidMount() {
    this.props.onUncomTasksInit();
  }

  render() {
    console.log(this.props.tasks);

    return this.props.tasks.length ? (
      <table styleName="myTable" className="mb-2">
        <thead>
          <tr className="thead-dark">
            <th>Title</th>
            <th>Detail</th>
            <th>Date</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map(el => {
            return (
              <Task
                key={el._id}
                task={el}
                onChange={() => this.props.changeDone(el, this.props.tasks)}
                viewDate
                onDelete={this.props.onDelete}
                passedDate
              />
            );
          })}
        </tbody>
      </table>
    ) : (
      <p>No tasks added yet.</p>
    );

    //   <p>
    //     {this.props.tasks.map(t => {
    //       return <p>{t.title}</p>;
    //     })}
    //   </p>
    //);
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.unComTs.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUncomTasksInit: () => dispatch(actions.initUncompletedTasks()),
    changeDone: (task, tasks) => dispatch(actions.onUncompletedTaskDone(task, tasks)),
    onDelete: id => dispatch(actions.deleteUncompletedTask(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(CompletedTasks, styles));
