import React from "react";
import { Route, Redirect } from "react-router-dom";
import { apiAddress } from "common";
import Loading from "components/main/loading";
import Fetch from "components/fetch/fetch";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isLogged, setIsLogged] = React.useState("not_set");

  React.useEffect(() => {
    Fetch.check((e) => setIsLogged(e));
  }, []);
  //TODO : fix login system
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged === "not_set") {
          return <Loading fullscreen={true} />;
        } else if (isLogged) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
