import Bets from "./Pages/Bets";
import NewGame from "./Pages/NewGame";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import SignIn from "./Pages/SignIn";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" exact> 
          <SignIn/> 
        </Route>
        <Route path="/reset">
          <ResetPassword /> 
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/new">
          <NewGame/>
        </Route>
        <Route path="/bets">
          <Bets/>
        </Route>
      </Switch>     
    </Router>
  );
}

export default App;
