import { Route, Switch } from "react-router-dom";
import "./App.css";
import Hall from "./components/Hall";
import Home from "./components/Home";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hall" component={Hall} />
        </Switch>
      </main>
    </>
  );
}

export default App;
