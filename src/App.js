import Home from "./pages/Home";
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      </Switch>
  </Router>
  );
}

export default App;
