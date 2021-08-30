import { useContext } from "react";
import Context from "../store/context";

const Clocks = () => {
  const ctx = useContext(Context);
  
  return <>{ctx.time}</>;
};

export default Clocks;
