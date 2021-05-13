import Navbar from "./components/Navbar";
import NewGame from "./Pages/NewGame";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div>
      <Navbar />      
      <NewGame/>
      <SignIn/>
      <ResetPassword /> 
      <Register/>
    </div>
  );
}

export default App;
