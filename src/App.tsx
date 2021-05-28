import Bets from "./pages/Bets";
import NewGame from "./pages/NewGame";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";
import { useAppSelector} from './store/hooks'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn)
  return (
    <Router>
      <Switch>
        <Route path="/reset">
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
          {isLogged || localStorage.getItem('token')? <Account/> : <Redirect to="/"/>}
        </Route>
             <Route  path="/" exact> 
                 {!isLogged && <SignIn/>} 
            </Route>

      </Switch>     
    </Router>
  );
}

export default App;
