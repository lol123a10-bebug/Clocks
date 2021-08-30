import { useMemo } from "react";
import { useContext } from "react";
import Context from "../store/context";

const Hall = () => {
  const ctx = useContext(Context);

  const background = useMemo(() => {
    if (ctx.second % 4 === 0) {
      return `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${
        Math.random() * 100
      }, 1)`;
    }
  }, [ctx.second]);

  return <div style={{ background }}>{ctx.second}</div>;
};

export default Hall;
