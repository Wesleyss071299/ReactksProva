import Bets from "./pages/Bets";
import NewGame from "./pages/NewGame";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
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
          {isLogged || localStorage.getItem('token')? <NewGame/> : <Redirect to="/"/>}
        </Route>
        <Route path="/bets">
          {isLogged || localStorage.getItem('token')? <Bets/> : <Redirect to="/"/>}
        </Route>
             <Route  path="/" exact> 
                 {!isLogged && <SignIn/>} 
            </Route>

      </Switch>     
    </Router>
  );
}

export default App;
