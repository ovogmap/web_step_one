import { Switch, Route } from "react-router-dom";
import { Home, TextEditor, VideoPlayer } from "./pages";

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
    </Switch>
  );
};
export default AppRouter;
