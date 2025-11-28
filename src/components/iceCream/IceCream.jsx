import React from "react";
import classes from "./Icecream.module.css";
import Scoop from "./Scoop/Scoop";

const IceCream = () => {
  return (
    <div className={classes.icecream}>
      <p className={classes.cone}></p>
      {/* {scoop components} */}
      <Scoop />
      <div className={classes.cherry}></div>
    </div>
  );
};

export default IceCream;
