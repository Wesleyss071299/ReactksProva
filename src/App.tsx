import Navbar from "./components/Navbar";
import Bets from "./Pages/Bets";
import NewGame from "./Pages/NewGame";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div>
      <Navbar />      
      <NewGame/>
      <Bets/>
      <SignIn/>
      <ResetPassword /> 
      <Register/>
    </div>
  );
}

export default App;
