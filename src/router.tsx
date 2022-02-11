import { Switch, Route } from "react-router-dom";
import { Home, TextEditor, VideoPlayer, Calendar } from "./pages";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/text-editor">
        <TextEditor />
      </Route>
      <Route path="/video-player">
        <VideoPlayer />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
    </Switch>
  );
};
export default AppRouter;
