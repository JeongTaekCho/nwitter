import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";
import { Redirect } from "react-router-dom";

const AppRouter = ({ isLogined, userObj }) => {
  return (
    <Router>
      {isLogined && <Navigation />}
      <Switch>
        {isLogined === true ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
