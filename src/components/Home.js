import Clocks from "./Clocks";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Clocks />
    </div>
  );
};

export default Home;
