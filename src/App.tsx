import Bets from "./Pages/Bets";
import NewGame from "./Pages/NewGame";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import SignIn from "./Pages/SignIn";
import { useAppSelector} from './store/hooks'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn)
  const token = useAppSelector((state) => state.auth.token)
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
          {!isLogged && <Redirect to="/"/>} 
        </Route>
        <Route path="/bets">
          {isLogged && <Bets/>}
          {!isLogged && <Redirect to="/"/>}       
        </Route>
          {!isLogged &&(
             <Route  path="/" exact> 
                 <SignIn/> 
            </Route>
          )}
      </Switch>     
    </Router>
  );
}

export default App;
