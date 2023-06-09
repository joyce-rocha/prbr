import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "onias@onias.com",
    password: "onias123",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Tente novamente!");
    }
  };

  const Logout = () => {
    setUser({ email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>Olá!</h2>

          <button className="logout" onClick={Logout}>
            SAIR
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
