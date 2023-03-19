import React from 'react';

function Alert(props) {
  return (
    <div className={`alert ${props.type}`}>
      {props.message}
    </div>
  );
}

export default Alert;
