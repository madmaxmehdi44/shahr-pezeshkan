import React from "react";
import Header from "components/header/header";
import Navbar from "components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "routes";
import Page404 from "components/page404";
import SinglePost from "components/main/singlePost";
import {
  Home,
  News,
  Convention,
  Minutes,
  Decisions,
  Reports,
  Financial,
  Projects,
  Gallery,
  Contact,
  About,
} from "zones/main/views/index";
export default (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        {routes.map((e, key) => {
          if (e.extension) {
            // return (
            //   <div>
            //     {e.data.map((item, itemkey) => (
            //       <Route
            //         exact
            //         path={item.link}
            //         component={item.component}
            //         key={itemkey}
            //       />
            //     ))}
            //   </div>
            // );
          } else {
            console.log(e);
            return (
              <Route exact path={e.link} component={e.component} key={key} />
            );
          }
        })}
        <Route exact path={"/minutes"} component={Minutes} />
        <Route exact path={"/decisions"} component={Decisions} />
        <Route exact path={"/financial"} component={Financial} />
        <Route exact path={"/reports"} component={Reports} />

        <Route exact path={`/post/:slug`} children={<SinglePost />} />

        <Route component={Page404} />
      </Switch>
    </div>
  );
};
