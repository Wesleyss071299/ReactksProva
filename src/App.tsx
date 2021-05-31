import Bets from "./pages/Bets";
import NewGame from "./pages/NewGame";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";
import { useAppSelector} from './store/hooks'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn)
  return (
    <Router>
      <Switch>
        <Route path="/forgot">
          <ForgotPassword /> 
        </Route>
        <Route path="/reset/:token">
          <ResetPassword /> 
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/new">
          {isLogged && <NewGame/>}
        </Route>
        <Route path="/bets">
          {isLogged && <Bets/>}
        </Route>
        <Route path="/account">
          {isLogged  && <Account/>}
        </Route>
             <Route  path="/" exact> 
                 {!isLogged && <SignIn/>} 
            </Route>

      </Switch>     
    </Router>
  );
}

export default App;
