import React from "react";
import Header from "components/header/header";
import Navbar from "components/navbar/navbar";
import Login from "zones/auth/authentication/login";

export default (props) => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
};
