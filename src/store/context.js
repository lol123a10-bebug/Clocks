import React, { useEffect, useState } from "react";
import { rnNm } from "../utility/fns";

// Задаем изначальные значения, чтобы IDE давал подсказки;
const Context = React.createContext({
  time: "",
  backgroundColor: "",
});

export const ContextProvider = (props) => {
  const [date, setDate] = useState(new Date());

  // Конвертируем формат h:m:s в hh:mm:ss;
  const h = date.getHours();
  const hh = h < 10 ? "0" + h : h;

  const m = date.getMinutes();
  const mm = m < 10 ? "0" + m : m;

  const s = date.getSeconds();
  const ss = s < 10 ? "0" + s : s;

  // Запуск часов;
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [bg, setBg] = useState("");

  // Проврека деления 4 без остатка;
  useEffect(() => {
    if (s % 4 === 0) {
      setBg(`rgb(${rnNm(0, 255)}, ${rnNm(0, 255)}, ${rnNm(0, 255)})`);
    }
  }, [s]);

  const contextValues = {
    time: `${hh}:${mm}:${ss}`,
    backgroundColor: bg,
  };

  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default Context;
