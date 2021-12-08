import { Switch, Route } from "react-router-dom";
import { Home } from "./pages";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default AppRouter;
