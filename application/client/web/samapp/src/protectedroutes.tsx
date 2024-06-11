import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute: React.FC<{ children: JSX.Element[] }> = ({
  children,
}) => {
  let currUser = sessionStorage.getItem("Name");

  return (
    <Route
      exact
      render={({ location }) =>
        currUser ? (
          children
        ) : (
          <Redirect to={{  pathname:"/login",state: { from: location }}} />
        )
      }
    />
  );
};
