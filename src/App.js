import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoLibrary from "./pages/VideoLibrary";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/video">
          <VideoLibrary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
