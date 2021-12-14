import { Switch, Route } from "react-router-dom";
import { Home, TextEditor } from "./pages";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/text-editor">
        <TextEditor />
      </Route>
    </Switch>
  );
};
export default AppRouter;
