import React from 'react';
import DeleteButton from '../../UI/DeleteButton';

const Task = props => {
  let inputProps = {},
    doneClasses = ['form-check-labe'],
    doneText = '';

  if (props.task.done) {
    inputProps.defaultChecked = true;
    doneClasses.push('text-success');
    doneText = 'Done';
  } else {
    inputProps = {};
    doneClasses.push('text-danger');
    doneText = props.passedDate ? 'Passed!' : 'In progress!';
  }

  return (
    <tr key={props.task.id}>
      <td>{props.task.title}</td>
      <td>{props.task.detail}</td>
      {props.viewDate ? <td>{props.task.viewDate}</td> : null}
      <td>
        <div className="form-check form-check-inline ml-3 d-flex">
          <input
            className="form-check-input"
            id={props.task._id}
            type="checkbox"
            onChange={props.onChange}
            {...inputProps}
          />
          <label htmlFor={props.task._id} className={doneClasses.join(' ')}>
            {doneText}
          </label>
        </div>
      </td>

      <td>
        <DeleteButton task={props.task} onDelete={props.onDelete} />
      </td>
    </tr>
  );
};

export default Task;
