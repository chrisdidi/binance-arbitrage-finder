import React from "react";
import { Route, Switch } from "react-router";
import Home from "../routes/home";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default AppRouter;
