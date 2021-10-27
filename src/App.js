/* eslint-disable no-undef */
import "./App.css";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Forgot from "./pages/forgotPasword/forgot";
// import ErrorPage from "../src/component/errorPage";
import ProtectedRoute from "../src/component/protectedRouter";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/forgot" component={Forgot} />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
          ></ProtectedRoute>
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/" component={Login} />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
