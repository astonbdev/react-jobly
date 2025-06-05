import { Route, Redirect } from 'react-router-dom';

/** PrivateRoute Component
 * 
 * A wrapper for Route that redirects to login page if user is not authenticated
 * 
 * Props:
 *  - exact: boolean
 *  - path: string
 *  - user: {username, fName, lName, email, [applications...]}
 *  - children: React components to render if authenticated
 * 
 * Routes -> PrivateRoute -> {Component}
 */
function PrivateRoute({ exact, path, user, children }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => user ? children : <Redirect to="/login" />}
    />
  );
}

export default PrivateRoute;