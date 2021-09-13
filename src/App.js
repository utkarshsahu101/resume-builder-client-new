import Login from "./Components/AuthenticationComponents/Login";
import Registration from "./Components/AuthenticationComponents/Registration";
import Resume from "./Components/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/AuthenticationComponents/PrivateRoute";
import ForgotPassword from "./Components/AuthenticationComponents/ForgotPassword";
import UpdateProfile from "./Components/NavigationComponents/UpdateProfile";
import Template from "./Components/NavigationComponents/Template";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'; 

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AuthProvider>
        <Router basename="/resume">
          <Switch>
            <PrivateRoute exact path="/" component={Resume} />
            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
            <PrivateRoute exact path="/template" component={Template} />
            {/* <Route exact path="/" component={Resume}></Route> */}
            <Route path="/login" component={Login}></Route>
            <Route path="/signUp" component={Registration}></Route>
            <Route path="/forgot-password" component={ForgotPassword}></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
