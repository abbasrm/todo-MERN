import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = props => {
  const deleteHandler = () => {
    if (window.confirm(`Are you sure to delete ${props.task.title}?`)) {
      props.onDelete(props.task._id);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-danger px-1 py-0"
      onClick={() => deleteHandler()}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
};

export default DeleteButton;
