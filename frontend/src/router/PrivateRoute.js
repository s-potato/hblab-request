import {
  Route,
  Redirect,
} from "react-router-dom";
export const PrivateRoute = ({ children, ...rest }) => {
  var token = localStorage.getItem("token");
  if (!token)
    token = sessionStorage.getItem("token")
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
