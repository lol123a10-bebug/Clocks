import React, { useEffect, useState } from "react";

const Context = React.createContext({
  time: "",
  second: null,
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

  const contextValues = {
    time: `${hh}:${mm}:${ss}`,
    second: s,
  };

  return (
    <Context.Provider value={contextValues}>{props.children}</Context.Provider>
  );
};

export default Context;
