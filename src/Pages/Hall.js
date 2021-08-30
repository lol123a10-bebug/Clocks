import { useContext } from "react";
import Context from "../store/context";
import classes from "./Hall.module.scss";

const Hall = () => {
  const ctx = useContext(Context);

  return (
    <div
      className={classes.Hall}
      style={{ background: ctx.backgroundColor }}
    ></div>
  );
};

export default Hall;
