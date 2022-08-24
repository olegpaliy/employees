import "./app.css";

import { Route, Switch } from "react-router-dom";
import EployeeProfile from "./pages/EployeeProfile";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/person-detail/:id">
        <EployeeProfile />
      </Route>
    </Switch>
  );
}

export default App;
