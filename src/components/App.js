import React, { useState, useEffect } from "react";
import Router from "components/Router";
import authService from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : "initializing..."}
      <footer>&copy; {new Date().getFullYear()} Dnitter</footer>
    </>
  );
}

export default App;
