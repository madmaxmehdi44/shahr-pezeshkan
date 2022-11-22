import React from "react";
import Header from "components/header/header";
import Navbar from "components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "routes";
export default (props) => {
  return (
    <div>
      admin
      {/* <Switch>
        {routes.map((e, key) => (
          <Route exact path={e.link} component={e.component} key={key} />
        ))}
      </Switch> */}
    </div>
  );
};
