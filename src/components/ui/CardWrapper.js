import classes from "./ui.module.css";
import React from "react";

const CardWrapper = (props, customClass) => {
  return (
    <div className={`${classes.card_wrapper} ${classes[props.customClass]}`}>
      {props.children}
    </div>
  );
};

export default CardWrapper;
