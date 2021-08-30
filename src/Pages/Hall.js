import { useMemo } from "react";
import { useContext } from "react";
import Context from "../store/context";
import classes from "./Hall.module.scss";

const Hall = () => {
  const ctx = useContext(Context);

  // Случайное число между указанными значениями.
  const rnNm = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const background = useMemo(() => {
    if (ctx.second % 4 === 0) {
      return `rgb(${rnNm(0, 255)}, ${rnNm(0, 255)}, ${rnNm(0, 255)})`;
    }
  }, [ctx.second]);

  return <div className={classes.Hall} style={{ background }}></div>;
};

export default Hall;
