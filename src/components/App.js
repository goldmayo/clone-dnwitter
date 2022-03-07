import React, { useState } from "react";
import Router from "components/Router";
import authService from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Dnitter</footer>
    </>
  );
}

export default App;
