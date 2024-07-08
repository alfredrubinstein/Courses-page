import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleLogin = () => {
    setIsRegistering(false);
  };

  return (
    <>
      {isRegistering ? (
        <Register onLogin={handleLogin} />
      ) : (
        <Login onRegister={handleRegister} />
      )}
    </>
  );
};

export default Auth;
