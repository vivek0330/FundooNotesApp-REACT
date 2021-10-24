/* eslint-disable no-undef */
import "./App.css";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Login />
      <SignUp /> */}
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
