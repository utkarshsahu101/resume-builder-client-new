import Login from "./Components/AuthenticationComponents/Login";
import Registration from "./Components/AuthenticationComponents/Registration";
import Resume from "./Components/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/AuthenticationComponents/PrivateRoute";
import ForgotPassword from "./Components/AuthenticationComponents/ForgotPassword";

function App() {
  return (
      <AuthProvider>
        <Router basename="/resume">
          <Switch>
            <PrivateRoute exact path="/" component={Resume} />
            {/* <Route exact path="/" component={Resume}></Route> */}
            <Route path="/login" component={Login}></Route>
            <Route path="/signUp" component={Registration}></Route>
            <Route path="/forgot-password" component={ForgotPassword}></Route>
          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
