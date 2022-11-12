import React from "react";
import { Navigate } from "react-router-dom";
//import { AppContext } from "../../context";

function PrivateRoute({ children }) {
  const user = { valid: true };
  //const { user } = React.useContext(AppContext);

  if (!user.valid) {
    return <Navigate to="/" />;
  }
  return children;
}

export { PrivateRoute };
