import React from "react";
import Header from "components/header/header";
import Navbar from "components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { authRoutes } from "routes";
export default (props) => {
  console.log(authRoutes);
    return (
    <div>
      <Navbar />
      <Switch>
        {authRoutes.map((e, key) => (
          <Route
          path={`/auth${e.link}`}
          component={e.component}
          key={key}
        />
        ))}
      </Switch>
    </div>
  );
};
