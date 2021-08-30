import { useState, useContext, useEffect } from "react";
import Context from "../store/context";
import classes from "./Hall.module.scss";

const Hall = () => {
  const ctx = useContext(Context);
  const [bg, setBg] = useState("");

  // Случайное число между указанными значениями.
  const rnNm = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  // Проврека деления 4 без остатка;
  useEffect(() => {
    if (ctx.second % 4 === 0) {
      setBg(`rgb(${rnNm(0, 255)}, ${rnNm(0, 255)}, ${rnNm(0, 255)})`);
    }
  }, [ctx.second]);

  return <div className={classes.Hall} style={{ background: bg }}></div>;
};

export default Hall;
