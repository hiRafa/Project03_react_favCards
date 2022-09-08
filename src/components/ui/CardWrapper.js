import classes from "./ui.module.css";
import React from "react";

const CardWrapper = (props) => {
  return (
    <div
      className={`${classes.card_wrapper}  ${
        classes[props.customClass ? "card_wrapper_fav" : null]
      } ${classes[props.formClass]}`}
    >
      {props.children}
    </div>
  );
};

export default CardWrapper;
