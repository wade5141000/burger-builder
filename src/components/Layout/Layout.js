import React from "react";
import classes from "./Layout.css";

const layout = (props) => (
  <>
    <div>toolbar, sideDrawer, backDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout;
