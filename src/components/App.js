import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import AppRouter from "./Router";
import firebase from "../fbase";
import { authService } from "../fbase";

function App() {
  const [isLogined, setIsLogined] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogined(true);
        setUserObj(user);
        console.log(user);
      } else {
        setIsLogined(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init === true ? (
        <AppRouter isLogined={isLogined} userObj={userObj} />
      ) : (
        "접속중..."
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
