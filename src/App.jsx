import { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      {showLogin ? (
        <Login onRegister={() => setShowLogin(false)} />
      ) : (
        <Registration onLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
