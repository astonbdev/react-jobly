import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetails from './CompanyDetails';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

/** Routes render component
 *
 * props: updateToken => fn,
 *        updateUser => fn,
 *        user => {username, fName, lName, email, [applications...]}
 *        msgs => [str...]
 *
 *
 * state: none
 *
 * App -> Routes -> (Homepage, CompanyList,
 *                   CompanyDetails, JobList,
 *                   SignupForm, LoginForm,
 *                   ProfileForm)
 */
function Routes({ updateToken, updateUser, user }) {
  //UI concerns here, not security of the routes
  return (
    <Switch>
      <>
        <Route exact path="/">
          <Homepage />
        </Route>
        <PrivateRoute exact path="/companies" user={user}>
          <CompanyList />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle" user={user}>
          <CompanyDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs" user={user}>
          <JobList />
        </PrivateRoute>
        <PrivateRoute exact path="/profile/:username" user={user}>
          <ProfileForm updateUser={updateUser} user={user} />
        </PrivateRoute>
        {!user &&
          <>
            <Route exact path="/signup">
              <SignupForm updateToken={updateToken} />
            </Route>
            <Route exact path="/login">
              <LoginForm updateToken={updateToken} />
            </Route>
          </>
        }
        <Redirect to="/" />
      </>
    </Switch>
  );
}
export default Routes;