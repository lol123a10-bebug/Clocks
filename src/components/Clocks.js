import { useState } from "react";
import { useEffect } from "react";

const Clocks = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return clearInterval(timer);
  }, []);

  const h = date.getHours();
  const hh = h < 10 ? "0" + h : h;

  const m = date.getMinutes();
  const mm = m < 10 ? "0" + m : m;

  const s = date.getSeconds();
  const ss = s < 10 ? "0" + s : s;

  return (
    <>
      {hh}:{mm}:{ss}
    </>
  );
};

export default Clocks;
