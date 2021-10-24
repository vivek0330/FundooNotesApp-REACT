/* eslint-disable no-undef */
import "./App.css";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Forgot from "./pages/forgotPasword/forgot";

function App() {
  return (
    <Router>
      <div>
        {/* <Login />
      <SignUp /> */}
        <Switch>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
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
