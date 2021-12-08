import { Switch, Route } from "react-router-dom";
import { Home } from "./pages";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/input">
        <div>input</div>
      </Route>
    </Switch>
  );
};
export default AppRouter;
