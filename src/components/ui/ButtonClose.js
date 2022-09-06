import React from "react";

const ButtonClose = (props) => {
  return (
    <button className="btn" onClick={props.onClose}>
      {props.txt}
    </button>
  );
};

export default ButtonClose;
