import classes from "./ui.module.css";
import React from "react";

const CardWrapper = (props) => {
  return <div className={classes.card_wrapper}>{props.children}</div>;
};

export default CardWrapper;
