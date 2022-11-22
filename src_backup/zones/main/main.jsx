import React from "react";
import Header from "components/header/header";
import Navbar from "components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "routes";
import Page404 from "components/page404";
import SinglePost from 'components/main/singlePost'
export default (props) => {

  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        {routes.map((e, key) => (
          <Route exact path={e.link} component={e.component} key={key} />
        ))}
        <Route exact path={`/post/:slug`}  children={<SinglePost />} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};


