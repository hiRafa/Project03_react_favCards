import MainNavigation from "../ui/MainNavigation";
import classes from "./ui.module.css";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
